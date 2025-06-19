# `cleanroomsMembership` Submodule <a name="`cleanroomsMembership` Submodule" id="@cdktf/provider-aws.cleanroomsMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsMembership <a name="CleanroomsMembership" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership aws_cleanrooms_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembership(scope Construct, id *string, config CleanroomsMembershipConfig) CleanroomsMembership
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig">CleanroomsMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig">CleanroomsMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.putDefaultResultConfiguration">PutDefaultResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration">PutPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetDefaultResultConfiguration">ResetDefaultResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetPaymentConfiguration">ResetPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultResultConfiguration` <a name="PutDefaultResultConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.putDefaultResultConfiguration"></a>

```go
func PutDefaultResultConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.putDefaultResultConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPaymentConfiguration` <a name="PutPaymentConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration"></a>

```go
func PutPaymentConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultResultConfiguration` <a name="ResetDefaultResultConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetDefaultResultConfiguration"></a>

```go
func ResetDefaultResultConfiguration()
```

##### `ResetPaymentConfiguration` <a name="ResetPaymentConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetPaymentConfiguration"></a>

```go
func ResetPaymentConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CleanroomsMembership resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

cleanroomsmembership.CleanroomsMembership_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

cleanroomsmembership.CleanroomsMembership_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

cleanroomsmembership.CleanroomsMembership_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

cleanroomsmembership.CleanroomsMembership_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CleanroomsMembership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CleanroomsMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CleanroomsMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CleanroomsMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationArn">CollaborationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationCreatorAccountId">CollaborationCreatorAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationCreatorDisplayName">CollaborationCreatorDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationName">CollaborationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfiguration">DefaultResultConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList">CleanroomsMembershipDefaultResultConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.memberAbilities">MemberAbilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.paymentConfiguration">PaymentConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList">CleanroomsMembershipPaymentConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationIdInput">CollaborationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfigurationInput">DefaultResultConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.paymentConfigurationInput">PaymentConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.queryLogStatusInput">QueryLogStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationId">CollaborationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.queryLogStatus">QueryLogStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CollaborationArn`<sup>Required</sup> <a name="CollaborationArn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationArn"></a>

```go
func CollaborationArn() *string
```

- *Type:* *string

---

##### `CollaborationCreatorAccountId`<sup>Required</sup> <a name="CollaborationCreatorAccountId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationCreatorAccountId"></a>

```go
func CollaborationCreatorAccountId() *string
```

- *Type:* *string

---

##### `CollaborationCreatorDisplayName`<sup>Required</sup> <a name="CollaborationCreatorDisplayName" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationCreatorDisplayName"></a>

```go
func CollaborationCreatorDisplayName() *string
```

- *Type:* *string

---

##### `CollaborationName`<sup>Required</sup> <a name="CollaborationName" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationName"></a>

```go
func CollaborationName() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DefaultResultConfiguration`<sup>Required</sup> <a name="DefaultResultConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfiguration"></a>

```go
func DefaultResultConfiguration() CleanroomsMembershipDefaultResultConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList">CleanroomsMembershipDefaultResultConfigurationList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MemberAbilities`<sup>Required</sup> <a name="MemberAbilities" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.memberAbilities"></a>

```go
func MemberAbilities() *[]*string
```

- *Type:* *[]*string

---

##### `PaymentConfiguration`<sup>Required</sup> <a name="PaymentConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.paymentConfiguration"></a>

```go
func PaymentConfiguration() CleanroomsMembershipPaymentConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList">CleanroomsMembershipPaymentConfigurationList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CollaborationIdInput`<sup>Optional</sup> <a name="CollaborationIdInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationIdInput"></a>

```go
func CollaborationIdInput() *string
```

- *Type:* *string

---

##### `DefaultResultConfigurationInput`<sup>Optional</sup> <a name="DefaultResultConfigurationInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfigurationInput"></a>

```go
func DefaultResultConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `PaymentConfigurationInput`<sup>Optional</sup> <a name="PaymentConfigurationInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.paymentConfigurationInput"></a>

```go
func PaymentConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `QueryLogStatusInput`<sup>Optional</sup> <a name="QueryLogStatusInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.queryLogStatusInput"></a>

```go
func QueryLogStatusInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CollaborationId`<sup>Required</sup> <a name="CollaborationId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.collaborationId"></a>

```go
func CollaborationId() *string
```

- *Type:* *string

---

##### `QueryLogStatus`<sup>Required</sup> <a name="QueryLogStatus" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.queryLogStatus"></a>

```go
func QueryLogStatus() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembership.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsMembershipConfig <a name="CleanroomsMembershipConfig" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CollaborationId: *string,
	QueryLogStatus: *string,
	DefaultResultConfiguration: interface{},
	PaymentConfiguration: interface{},
	Region: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.collaborationId">CollaborationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#collaboration_id CleanroomsMembership#collaboration_id}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.queryLogStatus">QueryLogStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#query_log_status CleanroomsMembership#query_log_status}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.defaultResultConfiguration">DefaultResultConfiguration</a></code> | <code>interface{}</code> | default_result_configuration block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.paymentConfiguration">PaymentConfiguration</a></code> | <code>interface{}</code> | payment_configuration block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#tags CleanroomsMembership#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CollaborationId`<sup>Required</sup> <a name="CollaborationId" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.collaborationId"></a>

```go
CollaborationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#collaboration_id CleanroomsMembership#collaboration_id}.

---

##### `QueryLogStatus`<sup>Required</sup> <a name="QueryLogStatus" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.queryLogStatus"></a>

```go
QueryLogStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#query_log_status CleanroomsMembership#query_log_status}.

---

##### `DefaultResultConfiguration`<sup>Optional</sup> <a name="DefaultResultConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.defaultResultConfiguration"></a>

```go
DefaultResultConfiguration interface{}
```

- *Type:* interface{}

default_result_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#default_result_configuration CleanroomsMembership#default_result_configuration}

---

##### `PaymentConfiguration`<sup>Optional</sup> <a name="PaymentConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.paymentConfiguration"></a>

```go
PaymentConfiguration interface{}
```

- *Type:* interface{}

payment_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#payment_configuration CleanroomsMembership#payment_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#region CleanroomsMembership#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#tags CleanroomsMembership#tags}.

---

### CleanroomsMembershipDefaultResultConfiguration <a name="CleanroomsMembershipDefaultResultConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipDefaultResultConfiguration {
	OutputConfiguration: interface{},
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.outputConfiguration">OutputConfiguration</a></code> | <code>interface{}</code> | output_configuration block. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}. |

---

##### `OutputConfiguration`<sup>Optional</sup> <a name="OutputConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.outputConfiguration"></a>

```go
OutputConfiguration interface{}
```

- *Type:* interface{}

output_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}.

---

### CleanroomsMembershipDefaultResultConfigurationOutputConfiguration <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration {
	S3: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration.property.s3">S3</a></code> | <code>interface{}</code> | s3 block. |

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration.property.s3"></a>

```go
S3 interface{}
```

- *Type:* interface{}

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}

---

### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 {
	Bucket: *string,
	ResultFormat: *string,
	KeyPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.resultFormat">ResultFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#result_format CleanroomsMembership#result_format}. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}.

---

##### `ResultFormat`<sup>Required</sup> <a name="ResultFormat" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.resultFormat"></a>

```go
ResultFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#result_format CleanroomsMembership#result_format}.

---

##### `KeyPrefix`<sup>Optional</sup> <a name="KeyPrefix" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.keyPrefix"></a>

```go
KeyPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}.

---

### CleanroomsMembershipPaymentConfiguration <a name="CleanroomsMembershipPaymentConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipPaymentConfiguration {
	QueryCompute: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.queryCompute">QueryCompute</a></code> | <code>interface{}</code> | query_compute block. |

---

##### `QueryCompute`<sup>Optional</sup> <a name="QueryCompute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.queryCompute"></a>

```go
QueryCompute interface{}
```

- *Type:* interface{}

query_compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#query_compute CleanroomsMembership#query_compute}

---

### CleanroomsMembershipPaymentConfigurationQueryCompute <a name="CleanroomsMembershipPaymentConfigurationQueryCompute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

&cleanroomsmembership.CleanroomsMembershipPaymentConfigurationQueryCompute {
	IsResponsible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute.property.isResponsible"></a>

```go
IsResponsible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsMembershipDefaultResultConfigurationList <a name="CleanroomsMembershipDefaultResultConfigurationList" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipDefaultResultConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsMembershipDefaultResultConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.get"></a>

```go
func Get(index *f64) CleanroomsMembershipDefaultResultConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipDefaultResultConfigurationOutputConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.get"></a>

```go
func Get(index *f64) CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3"></a>

```go
func PutS3(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3Input">S3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3"></a>

```go
func S3() CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3Input"></a>

```go
func S3Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.get"></a>

```go
func Get(index *f64) CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetKeyPrefix">ResetKeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyPrefix` <a name="ResetKeyPrefix" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetKeyPrefix"></a>

```go
func ResetKeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefixInput">KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormatInput">ResultFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormat">ResultFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `KeyPrefixInput`<sup>Optional</sup> <a name="KeyPrefixInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefixInput"></a>

```go
func KeyPrefixInput() *string
```

- *Type:* *string

---

##### `ResultFormatInput`<sup>Optional</sup> <a name="ResultFormatInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormatInput"></a>

```go
func ResultFormatInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix"></a>

```go
func KeyPrefix() *string
```

- *Type:* *string

---

##### `ResultFormat`<sup>Required</sup> <a name="ResultFormat" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormat"></a>

```go
func ResultFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipDefaultResultConfigurationOutputReference <a name="CleanroomsMembershipDefaultResultConfigurationOutputReference" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipDefaultResultConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsMembershipDefaultResultConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.putOutputConfiguration">PutOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetOutputConfiguration">ResetOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOutputConfiguration` <a name="PutOutputConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.putOutputConfiguration"></a>

```go
func PutOutputConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.putOutputConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOutputConfiguration` <a name="ResetOutputConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetOutputConfiguration"></a>

```go
func ResetOutputConfiguration()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfiguration">OutputConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfigurationInput">OutputConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OutputConfiguration`<sup>Required</sup> <a name="OutputConfiguration" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfiguration"></a>

```go
func OutputConfiguration() CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList</a>

---

##### `OutputConfigurationInput`<sup>Optional</sup> <a name="OutputConfigurationInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfigurationInput"></a>

```go
func OutputConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipPaymentConfigurationList <a name="CleanroomsMembershipPaymentConfigurationList" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipPaymentConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsMembershipPaymentConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.get"></a>

```go
func Get(index *f64) CleanroomsMembershipPaymentConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipPaymentConfigurationOutputReference <a name="CleanroomsMembershipPaymentConfigurationOutputReference" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipPaymentConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsMembershipPaymentConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putQueryCompute">PutQueryCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetQueryCompute">ResetQueryCompute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQueryCompute` <a name="PutQueryCompute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putQueryCompute"></a>

```go
func PutQueryCompute(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putQueryCompute.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetQueryCompute` <a name="ResetQueryCompute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetQueryCompute"></a>

```go
func ResetQueryCompute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryCompute">QueryCompute</a></code> | <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList">CleanroomsMembershipPaymentConfigurationQueryComputeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryComputeInput">QueryComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryCompute`<sup>Required</sup> <a name="QueryCompute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryCompute"></a>

```go
func QueryCompute() CleanroomsMembershipPaymentConfigurationQueryComputeList
```

- *Type:* <a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList">CleanroomsMembershipPaymentConfigurationQueryComputeList</a>

---

##### `QueryComputeInput`<sup>Optional</sup> <a name="QueryComputeInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryComputeInput"></a>

```go
func QueryComputeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipPaymentConfigurationQueryComputeList <a name="CleanroomsMembershipPaymentConfigurationQueryComputeList" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipPaymentConfigurationQueryComputeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsMembershipPaymentConfigurationQueryComputeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.get"></a>

```go
func Get(index *f64) CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference <a name="CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/cleanroomsmembership"

cleanroomsmembership.NewCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput">IsResponsibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponsibleInput`<sup>Optional</sup> <a name="IsResponsibleInput" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput"></a>

```go
func IsResponsibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsible"></a>

```go
func IsResponsible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



