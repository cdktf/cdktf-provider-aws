# `datasyncLocationSmb` Submodule <a name="`datasyncLocationSmb` Submodule" id="@cdktf/provider-aws.datasyncLocationSmb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationSmb <a name="DatasyncLocationSmb" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb aws_datasync_location_smb}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datasynclocationsmb"

datasynclocationsmb.NewDatasyncLocationSmb(scope Construct, id *string, config DatasyncLocationSmbConfig) DatasyncLocationSmb
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig">DatasyncLocationSmbConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig">DatasyncLocationSmbConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.putMountOptions">PutMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetMountOptions">ResetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMountOptions` <a name="PutMountOptions" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.putMountOptions"></a>

```go
func PutMountOptions(value DatasyncLocationSmbMountOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

---

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetId"></a>

```go
func ResetId()
```

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetMountOptions"></a>

```go
func ResetMountOptions()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatasyncLocationSmb resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datasynclocationsmb"

datasynclocationsmb.DatasyncLocationSmb_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datasynclocationsmb"

datasynclocationsmb.DatasyncLocationSmb_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datasynclocationsmb"

datasynclocationsmb.DatasyncLocationSmb_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datasynclocationsmb"

datasynclocationsmb.DatasyncLocationSmb_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatasyncLocationSmb resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatasyncLocationSmb to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatasyncLocationSmb that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatasyncLocationSmb to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference">DatasyncLocationSmbMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.agentArnsInput">AgentArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.mountOptionsInput">MountOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.serverHostnameInput">ServerHostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.subdirectoryInput">SubdirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.agentArns">AgentArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.serverHostname">ServerHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.user">User</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.mountOptions"></a>

```go
func MountOptions() DatasyncLocationSmbMountOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference">DatasyncLocationSmbMountOptionsOutputReference</a>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `AgentArnsInput`<sup>Optional</sup> <a name="AgentArnsInput" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.agentArnsInput"></a>

```go
func AgentArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.mountOptionsInput"></a>

```go
func MountOptionsInput() DatasyncLocationSmbMountOptions
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServerHostnameInput`<sup>Optional</sup> <a name="ServerHostnameInput" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.serverHostnameInput"></a>

```go
func ServerHostnameInput() *string
```

- *Type:* *string

---

##### `SubdirectoryInput`<sup>Optional</sup> <a name="SubdirectoryInput" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.subdirectoryInput"></a>

```go
func SubdirectoryInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `AgentArns`<sup>Required</sup> <a name="AgentArns" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.agentArns"></a>

```go
func AgentArns() *[]*string
```

- *Type:* *[]*string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServerHostname`<sup>Required</sup> <a name="ServerHostname" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.serverHostname"></a>

```go
func ServerHostname() *string
```

- *Type:* *string

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.subdirectory"></a>

```go
func Subdirectory() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmb.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationSmbConfig <a name="DatasyncLocationSmbConfig" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datasynclocationsmb"

&datasynclocationsmb.DatasyncLocationSmbConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AgentArns: *[]*string,
	Password: *string,
	ServerHostname: *string,
	Subdirectory: *string,
	User: *string,
	Domain: *string,
	Id: *string,
	MountOptions: github.com/cdktf/cdktf-provider-aws-go/aws/v21.datasyncLocationSmb.DatasyncLocationSmbMountOptions,
	Region: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.agentArns">AgentArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#agent_arns DatasyncLocationSmb#agent_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#password DatasyncLocationSmb#password}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.serverHostname">ServerHostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#server_hostname DatasyncLocationSmb#server_hostname}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#subdirectory DatasyncLocationSmb#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.user">User</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#user DatasyncLocationSmb#user}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#domain DatasyncLocationSmb#domain}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#id DatasyncLocationSmb#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#tags DatasyncLocationSmb#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#tags_all DatasyncLocationSmb#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentArns`<sup>Required</sup> <a name="AgentArns" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.agentArns"></a>

```go
AgentArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#agent_arns DatasyncLocationSmb#agent_arns}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#password DatasyncLocationSmb#password}.

---

##### `ServerHostname`<sup>Required</sup> <a name="ServerHostname" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.serverHostname"></a>

```go
ServerHostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#server_hostname DatasyncLocationSmb#server_hostname}.

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.subdirectory"></a>

```go
Subdirectory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#subdirectory DatasyncLocationSmb#subdirectory}.

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.user"></a>

```go
User *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#user DatasyncLocationSmb#user}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#domain DatasyncLocationSmb#domain}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#id DatasyncLocationSmb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.mountOptions"></a>

```go
MountOptions DatasyncLocationSmbMountOptions
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#mount_options DatasyncLocationSmb#mount_options}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#region DatasyncLocationSmb#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#tags DatasyncLocationSmb#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#tags_all DatasyncLocationSmb#tags_all}.

---

### DatasyncLocationSmbMountOptions <a name="DatasyncLocationSmbMountOptions" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datasynclocationsmb"

&datasynclocationsmb.DatasyncLocationSmbMountOptions {
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#version DatasyncLocationSmb#version}. |

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/datasync_location_smb#version DatasyncLocationSmb#version}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationSmbMountOptionsOutputReference <a name="DatasyncLocationSmbMountOptionsOutputReference" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/datasynclocationsmb"

datasynclocationsmb.NewDatasyncLocationSmbMountOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncLocationSmbMountOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DatasyncLocationSmbMountOptions
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationSmb.DatasyncLocationSmbMountOptions">DatasyncLocationSmbMountOptions</a>

---



