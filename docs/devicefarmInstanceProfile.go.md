# `devicefarmInstanceProfile` Submodule <a name="`devicefarmInstanceProfile` Submodule" id="@cdktf/provider-aws.devicefarmInstanceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicefarmInstanceProfile <a name="DevicefarmInstanceProfile" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile aws_devicefarm_instance_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/devicefarminstanceprofile"

devicefarminstanceprofile.NewDevicefarmInstanceProfile(scope Construct, id *string, config DevicefarmInstanceProfileConfig) DevicefarmInstanceProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig">DevicefarmInstanceProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig">DevicefarmInstanceProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetExcludeAppPackagesFromCleanup">ResetExcludeAppPackagesFromCleanup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetPackageCleanup">ResetPackageCleanup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetRebootAfterUse">ResetRebootAfterUse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExcludeAppPackagesFromCleanup` <a name="ResetExcludeAppPackagesFromCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetExcludeAppPackagesFromCleanup"></a>

```go
func ResetExcludeAppPackagesFromCleanup()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetId"></a>

```go
func ResetId()
```

##### `ResetPackageCleanup` <a name="ResetPackageCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetPackageCleanup"></a>

```go
func ResetPackageCleanup()
```

##### `ResetRebootAfterUse` <a name="ResetRebootAfterUse" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetRebootAfterUse"></a>

```go
func ResetRebootAfterUse()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevicefarmInstanceProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/devicefarminstanceprofile"

devicefarminstanceprofile.DevicefarmInstanceProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/devicefarminstanceprofile"

devicefarminstanceprofile.DevicefarmInstanceProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/devicefarminstanceprofile"

devicefarminstanceprofile.DevicefarmInstanceProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/devicefarminstanceprofile"

devicefarminstanceprofile.DevicefarmInstanceProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DevicefarmInstanceProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevicefarmInstanceProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevicefarmInstanceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DevicefarmInstanceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanupInput">ExcludeAppPackagesFromCleanupInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanupInput">PackageCleanupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUseInput">RebootAfterUseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanup">ExcludeAppPackagesFromCleanup</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanup">PackageCleanup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUse">RebootAfterUse</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExcludeAppPackagesFromCleanupInput`<sup>Optional</sup> <a name="ExcludeAppPackagesFromCleanupInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanupInput"></a>

```go
func ExcludeAppPackagesFromCleanupInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PackageCleanupInput`<sup>Optional</sup> <a name="PackageCleanupInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanupInput"></a>

```go
func PackageCleanupInput() interface{}
```

- *Type:* interface{}

---

##### `RebootAfterUseInput`<sup>Optional</sup> <a name="RebootAfterUseInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUseInput"></a>

```go
func RebootAfterUseInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExcludeAppPackagesFromCleanup`<sup>Required</sup> <a name="ExcludeAppPackagesFromCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanup"></a>

```go
func ExcludeAppPackagesFromCleanup() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PackageCleanup`<sup>Required</sup> <a name="PackageCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanup"></a>

```go
func PackageCleanup() interface{}
```

- *Type:* interface{}

---

##### `RebootAfterUse`<sup>Required</sup> <a name="RebootAfterUse" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUse"></a>

```go
func RebootAfterUse() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevicefarmInstanceProfileConfig <a name="DevicefarmInstanceProfileConfig" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/devicefarminstanceprofile"

&devicefarminstanceprofile.DevicefarmInstanceProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	ExcludeAppPackagesFromCleanup: *[]*string,
	Id: *string,
	PackageCleanup: interface{},
	RebootAfterUse: interface{},
	Region: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.excludeAppPackagesFromCleanup">ExcludeAppPackagesFromCleanup</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.packageCleanup">PackageCleanup</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.rebootAfterUse">RebootAfterUse</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}.

---

##### `ExcludeAppPackagesFromCleanup`<sup>Optional</sup> <a name="ExcludeAppPackagesFromCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.excludeAppPackagesFromCleanup"></a>

```go
ExcludeAppPackagesFromCleanup *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PackageCleanup`<sup>Optional</sup> <a name="PackageCleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.packageCleanup"></a>

```go
PackageCleanup interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}.

---

##### `RebootAfterUse`<sup>Optional</sup> <a name="RebootAfterUse" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.rebootAfterUse"></a>

```go
RebootAfterUse interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#region DevicefarmInstanceProfile#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}.

---



