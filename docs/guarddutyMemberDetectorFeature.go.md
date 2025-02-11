# `guarddutyMemberDetectorFeature` Submodule <a name="`guarddutyMemberDetectorFeature` Submodule" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyMemberDetectorFeature <a name="GuarddutyMemberDetectorFeature" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/guardduty_member_detector_feature aws_guardduty_member_detector_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutymemberdetectorfeature"

guarddutymemberdetectorfeature.NewGuarddutyMemberDetectorFeature(scope Construct, id *string, config GuarddutyMemberDetectorFeatureConfig) GuarddutyMemberDetectorFeature
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig">GuarddutyMemberDetectorFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig">GuarddutyMemberDetectorFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.putAdditionalConfiguration">PutAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetAdditionalConfiguration">ResetAdditionalConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalConfiguration` <a name="PutAdditionalConfiguration" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.putAdditionalConfiguration"></a>

```go
func PutAdditionalConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.putAdditionalConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalConfiguration` <a name="ResetAdditionalConfiguration" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.resetAdditionalConfiguration"></a>

```go
func ResetAdditionalConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GuarddutyMemberDetectorFeature resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutymemberdetectorfeature"

guarddutymemberdetectorfeature.GuarddutyMemberDetectorFeature_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutymemberdetectorfeature"

guarddutymemberdetectorfeature.GuarddutyMemberDetectorFeature_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutymemberdetectorfeature"

guarddutymemberdetectorfeature.GuarddutyMemberDetectorFeature_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutymemberdetectorfeature"

guarddutymemberdetectorfeature.GuarddutyMemberDetectorFeature_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GuarddutyMemberDetectorFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GuarddutyMemberDetectorFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GuarddutyMemberDetectorFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/guardduty_member_detector_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GuarddutyMemberDetectorFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.additionalConfiguration">AdditionalConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList">GuarddutyMemberDetectorFeatureAdditionalConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.additionalConfigurationInput">AdditionalConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.detectorIdInput">DetectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.detectorId">DetectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalConfiguration`<sup>Required</sup> <a name="AdditionalConfiguration" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.additionalConfiguration"></a>

```go
func AdditionalConfiguration() GuarddutyMemberDetectorFeatureAdditionalConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList">GuarddutyMemberDetectorFeatureAdditionalConfigurationList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AdditionalConfigurationInput`<sup>Optional</sup> <a name="AdditionalConfigurationInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.additionalConfigurationInput"></a>

```go
func AdditionalConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DetectorIdInput`<sup>Optional</sup> <a name="DetectorIdInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.detectorIdInput"></a>

```go
func DetectorIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.detectorId"></a>

```go
func DetectorId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeature.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyMemberDetectorFeatureAdditionalConfiguration <a name="GuarddutyMemberDetectorFeatureAdditionalConfiguration" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutymemberdetectorfeature"

&guarddutymemberdetectorfeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration {
	Name: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}.

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfiguration.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}.

---

### GuarddutyMemberDetectorFeatureConfig <a name="GuarddutyMemberDetectorFeatureConfig" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutymemberdetectorfeature"

&guarddutymemberdetectorfeature.GuarddutyMemberDetectorFeatureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	DetectorId: *string,
	Name: *string,
	Status: *string,
	AdditionalConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/guardduty_member_detector_feature#account_id GuarddutyMemberDetectorFeature#account_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.detectorId">DetectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/guardduty_member_detector_feature#detector_id GuarddutyMemberDetectorFeature#detector_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.additionalConfiguration">AdditionalConfiguration</a></code> | <code>interface{}</code> | additional_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/guardduty_member_detector_feature#account_id GuarddutyMemberDetectorFeature#account_id}.

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.detectorId"></a>

```go
DetectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/guardduty_member_detector_feature#detector_id GuarddutyMemberDetectorFeature#detector_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}.

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}.

---

##### `AdditionalConfiguration`<sup>Optional</sup> <a name="AdditionalConfiguration" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureConfig.property.additionalConfiguration"></a>

```go
AdditionalConfiguration interface{}
```

- *Type:* interface{}

additional_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/guardduty_member_detector_feature#additional_configuration GuarddutyMemberDetectorFeature#additional_configuration}

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyMemberDetectorFeatureAdditionalConfigurationList <a name="GuarddutyMemberDetectorFeatureAdditionalConfigurationList" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutymemberdetectorfeature"

guarddutymemberdetectorfeature.NewGuarddutyMemberDetectorFeatureAdditionalConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GuarddutyMemberDetectorFeatureAdditionalConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.get"></a>

```go
func Get(index *f64) GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference <a name="GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/guarddutymemberdetectorfeature"

guarddutymemberdetectorfeature.NewGuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.guarddutyMemberDetectorFeature.GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



