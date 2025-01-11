# `costoptimizationhubPreferences` Submodule <a name="`costoptimizationhubPreferences` Submodule" id="@cdktf/provider-aws.costoptimizationhubPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostoptimizationhubPreferences <a name="CostoptimizationhubPreferences" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/costoptimizationhub_preferences aws_costoptimizationhub_preferences}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/costoptimizationhubpreferences"

costoptimizationhubpreferences.NewCostoptimizationhubPreferences(scope Construct, id *string, config CostoptimizationhubPreferencesConfig) CostoptimizationhubPreferences
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig">CostoptimizationhubPreferencesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig">CostoptimizationhubPreferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetMemberAccountDiscountVisibility">ResetMemberAccountDiscountVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetSavingsEstimationMode">ResetSavingsEstimationMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetMemberAccountDiscountVisibility` <a name="ResetMemberAccountDiscountVisibility" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetMemberAccountDiscountVisibility"></a>

```go
func ResetMemberAccountDiscountVisibility()
```

##### `ResetSavingsEstimationMode` <a name="ResetSavingsEstimationMode" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetSavingsEstimationMode"></a>

```go
func ResetSavingsEstimationMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CostoptimizationhubPreferences resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/costoptimizationhubpreferences"

costoptimizationhubpreferences.CostoptimizationhubPreferences_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/costoptimizationhubpreferences"

costoptimizationhubpreferences.CostoptimizationhubPreferences_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/costoptimizationhubpreferences"

costoptimizationhubpreferences.CostoptimizationhubPreferences_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/costoptimizationhubpreferences"

costoptimizationhubpreferences.CostoptimizationhubPreferences_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CostoptimizationhubPreferences resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CostoptimizationhubPreferences to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CostoptimizationhubPreferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/costoptimizationhub_preferences#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CostoptimizationhubPreferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.memberAccountDiscountVisibilityInput">MemberAccountDiscountVisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.savingsEstimationModeInput">SavingsEstimationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.memberAccountDiscountVisibility">MemberAccountDiscountVisibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.savingsEstimationMode">SavingsEstimationMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MemberAccountDiscountVisibilityInput`<sup>Optional</sup> <a name="MemberAccountDiscountVisibilityInput" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.memberAccountDiscountVisibilityInput"></a>

```go
func MemberAccountDiscountVisibilityInput() *string
```

- *Type:* *string

---

##### `SavingsEstimationModeInput`<sup>Optional</sup> <a name="SavingsEstimationModeInput" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.savingsEstimationModeInput"></a>

```go
func SavingsEstimationModeInput() *string
```

- *Type:* *string

---

##### `MemberAccountDiscountVisibility`<sup>Required</sup> <a name="MemberAccountDiscountVisibility" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.memberAccountDiscountVisibility"></a>

```go
func MemberAccountDiscountVisibility() *string
```

- *Type:* *string

---

##### `SavingsEstimationMode`<sup>Required</sup> <a name="SavingsEstimationMode" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.savingsEstimationMode"></a>

```go
func SavingsEstimationMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CostoptimizationhubPreferencesConfig <a name="CostoptimizationhubPreferencesConfig" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/costoptimizationhubpreferences"

&costoptimizationhubpreferences.CostoptimizationhubPreferencesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MemberAccountDiscountVisibility: *string,
	SavingsEstimationMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.memberAccountDiscountVisibility">MemberAccountDiscountVisibility</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/costoptimizationhub_preferences#member_account_discount_visibility CostoptimizationhubPreferences#member_account_discount_visibility}. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.savingsEstimationMode">SavingsEstimationMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/costoptimizationhub_preferences#savings_estimation_mode CostoptimizationhubPreferences#savings_estimation_mode}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MemberAccountDiscountVisibility`<sup>Optional</sup> <a name="MemberAccountDiscountVisibility" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.memberAccountDiscountVisibility"></a>

```go
MemberAccountDiscountVisibility *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/costoptimizationhub_preferences#member_account_discount_visibility CostoptimizationhubPreferences#member_account_discount_visibility}.

---

##### `SavingsEstimationMode`<sup>Optional</sup> <a name="SavingsEstimationMode" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.savingsEstimationMode"></a>

```go
SavingsEstimationMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/costoptimizationhub_preferences#savings_estimation_mode CostoptimizationhubPreferences#savings_estimation_mode}.

---



