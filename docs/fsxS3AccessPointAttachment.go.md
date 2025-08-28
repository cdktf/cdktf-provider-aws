# `fsxS3AccessPointAttachment` Submodule <a name="`fsxS3AccessPointAttachment` Submodule" id="@cdktf/provider-aws.fsxS3AccessPointAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxS3AccessPointAttachment <a name="FsxS3AccessPointAttachment" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment aws_fsx_s3_access_point_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachment(scope Construct, id *string, config FsxS3AccessPointAttachmentConfig) FsxS3AccessPointAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig">FsxS3AccessPointAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig">FsxS3AccessPointAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOpenzfsConfiguration">PutOpenzfsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putS3AccessPoint">PutS3AccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetOpenzfsConfiguration">ResetOpenzfsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetS3AccessPoint">ResetS3AccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOpenzfsConfiguration` <a name="PutOpenzfsConfiguration" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOpenzfsConfiguration"></a>

```go
func PutOpenzfsConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putOpenzfsConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutS3AccessPoint` <a name="PutS3AccessPoint" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putS3AccessPoint"></a>

```go
func PutS3AccessPoint(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putS3AccessPoint.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putTimeouts"></a>

```go
func PutTimeouts(value FsxS3AccessPointAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeouts">FsxS3AccessPointAttachmentTimeouts</a>

---

##### `ResetOpenzfsConfiguration` <a name="ResetOpenzfsConfiguration" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetOpenzfsConfiguration"></a>

```go
func ResetOpenzfsConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetS3AccessPoint` <a name="ResetS3AccessPoint" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetS3AccessPoint"></a>

```go
func ResetS3AccessPoint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FsxS3AccessPointAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

fsxs3accesspointattachment.FsxS3AccessPointAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

fsxs3accesspointattachment.FsxS3AccessPointAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

fsxs3accesspointattachment.FsxS3AccessPointAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

fsxs3accesspointattachment.FsxS3AccessPointAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FsxS3AccessPointAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FsxS3AccessPointAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FsxS3AccessPointAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FsxS3AccessPointAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.openzfsConfiguration">OpenzfsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList">FsxS3AccessPointAttachmentOpenzfsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.s3AccessPoint">S3AccessPoint</a></code> | <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList">FsxS3AccessPointAttachmentS3AccessPointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.s3AccessPointAlias">S3AccessPointAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.s3AccessPointArn">S3AccessPointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference">FsxS3AccessPointAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.openzfsConfigurationInput">OpenzfsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.s3AccessPointInput">S3AccessPointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OpenzfsConfiguration`<sup>Required</sup> <a name="OpenzfsConfiguration" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.openzfsConfiguration"></a>

```go
func OpenzfsConfiguration() FsxS3AccessPointAttachmentOpenzfsConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList">FsxS3AccessPointAttachmentOpenzfsConfigurationList</a>

---

##### `S3AccessPoint`<sup>Required</sup> <a name="S3AccessPoint" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.s3AccessPoint"></a>

```go
func S3AccessPoint() FsxS3AccessPointAttachmentS3AccessPointList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList">FsxS3AccessPointAttachmentS3AccessPointList</a>

---

##### `S3AccessPointAlias`<sup>Required</sup> <a name="S3AccessPointAlias" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.s3AccessPointAlias"></a>

```go
func S3AccessPointAlias() *string
```

- *Type:* *string

---

##### `S3AccessPointArn`<sup>Required</sup> <a name="S3AccessPointArn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.s3AccessPointArn"></a>

```go
func S3AccessPointArn() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.timeouts"></a>

```go
func Timeouts() FsxS3AccessPointAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference">FsxS3AccessPointAttachmentTimeoutsOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OpenzfsConfigurationInput`<sup>Optional</sup> <a name="OpenzfsConfigurationInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.openzfsConfigurationInput"></a>

```go
func OpenzfsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `S3AccessPointInput`<sup>Optional</sup> <a name="S3AccessPointInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.s3AccessPointInput"></a>

```go
func S3AccessPointInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxS3AccessPointAttachmentConfig <a name="FsxS3AccessPointAttachmentConfig" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Type: *string,
	OpenzfsConfiguration: interface{},
	Region: *string,
	S3AccessPoint: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#name FsxS3AccessPointAttachment#name}. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.openzfsConfiguration">OpenzfsConfiguration</a></code> | <code>interface{}</code> | openzfs_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.s3AccessPoint">S3AccessPoint</a></code> | <code>interface{}</code> | s3_access_point block. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeouts">FsxS3AccessPointAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#name FsxS3AccessPointAttachment#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}.

---

##### `OpenzfsConfiguration`<sup>Optional</sup> <a name="OpenzfsConfiguration" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.openzfsConfiguration"></a>

```go
OpenzfsConfiguration interface{}
```

- *Type:* interface{}

openzfs_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#openzfs_configuration FsxS3AccessPointAttachment#openzfs_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#region FsxS3AccessPointAttachment#region}

---

##### `S3AccessPoint`<sup>Optional</sup> <a name="S3AccessPoint" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.s3AccessPoint"></a>

```go
S3AccessPoint interface{}
```

- *Type:* interface{}

s3_access_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#s3_access_point FsxS3AccessPointAttachment#s3_access_point}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentConfig.property.timeouts"></a>

```go
Timeouts FsxS3AccessPointAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeouts">FsxS3AccessPointAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#timeouts FsxS3AccessPointAttachment#timeouts}

---

### FsxS3AccessPointAttachmentOpenzfsConfiguration <a name="FsxS3AccessPointAttachmentOpenzfsConfiguration" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentOpenzfsConfiguration {
	VolumeId: *string,
	FileSystemIdentity: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfiguration.property.volumeId">VolumeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#volume_id FsxS3AccessPointAttachment#volume_id}. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfiguration.property.fileSystemIdentity">FileSystemIdentity</a></code> | <code>interface{}</code> | file_system_identity block. |

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfiguration.property.volumeId"></a>

```go
VolumeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#volume_id FsxS3AccessPointAttachment#volume_id}.

---

##### `FileSystemIdentity`<sup>Optional</sup> <a name="FileSystemIdentity" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfiguration.property.fileSystemIdentity"></a>

```go
FileSystemIdentity interface{}
```

- *Type:* interface{}

file_system_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#file_system_identity FsxS3AccessPointAttachment#file_system_identity}

---

### FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity <a name="FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity {
	Type: *string,
	PosixUser: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity.property.posixUser">PosixUser</a></code> | <code>interface{}</code> | posix_user block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}.

---

##### `PosixUser`<sup>Optional</sup> <a name="PosixUser" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity.property.posixUser"></a>

```go
PosixUser interface{}
```

- *Type:* interface{}

posix_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#posix_user FsxS3AccessPointAttachment#posix_user}

---

### FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser <a name="FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser {
	Gid: *f64,
	Uid: *f64,
	SecondaryGids: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser.property.gid">Gid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#gid FsxS3AccessPointAttachment#gid}. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser.property.uid">Uid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#uid FsxS3AccessPointAttachment#uid}. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser.property.secondaryGids">SecondaryGids</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#secondary_gids FsxS3AccessPointAttachment#secondary_gids}. |

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser.property.gid"></a>

```go
Gid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#gid FsxS3AccessPointAttachment#gid}.

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser.property.uid"></a>

```go
Uid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#uid FsxS3AccessPointAttachment#uid}.

---

##### `SecondaryGids`<sup>Optional</sup> <a name="SecondaryGids" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser.property.secondaryGids"></a>

```go
SecondaryGids *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#secondary_gids FsxS3AccessPointAttachment#secondary_gids}.

---

### FsxS3AccessPointAttachmentS3AccessPoint <a name="FsxS3AccessPointAttachmentS3AccessPoint" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentS3AccessPoint {
	Policy: *string,
	VpcConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint.property.policy">Policy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#policy FsxS3AccessPointAttachment#policy}. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint.property.vpcConfiguration">VpcConfiguration</a></code> | <code>interface{}</code> | vpc_configuration block. |

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#policy FsxS3AccessPointAttachment#policy}.

---

##### `VpcConfiguration`<sup>Optional</sup> <a name="VpcConfiguration" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPoint.property.vpcConfiguration"></a>

```go
VpcConfiguration interface{}
```

- *Type:* interface{}

vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#vpc_configuration FsxS3AccessPointAttachment#vpc_configuration}

---

### FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration <a name="FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration {
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#vpc_id FsxS3AccessPointAttachment#vpc_id}. |

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#vpc_id FsxS3AccessPointAttachment#vpc_id}.

---

### FsxS3AccessPointAttachmentTimeouts <a name="FsxS3AccessPointAttachmentTimeouts" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

&fsxs3accesspointattachment.FsxS3AccessPointAttachmentTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#create FsxS3AccessPointAttachment#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/fsx_s3_access_point_attachment#delete FsxS3AccessPointAttachment#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList <a name="FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.get"></a>

```go
func Get(index *f64) FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference <a name="FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.putPosixUser">PutPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.resetPosixUser">ResetPosixUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPosixUser` <a name="PutPosixUser" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.putPosixUser"></a>

```go
func PutPosixUser(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.putPosixUser.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPosixUser` <a name="ResetPosixUser" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.resetPosixUser"></a>

```go
func ResetPosixUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.property.posixUser">PosixUser</a></code> | <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList">FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.property.posixUserInput">PosixUserInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PosixUser`<sup>Required</sup> <a name="PosixUser" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.property.posixUser"></a>

```go
func PosixUser() FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList">FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList</a>

---

##### `PosixUserInput`<sup>Optional</sup> <a name="PosixUserInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.property.posixUserInput"></a>

```go
func PosixUserInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList <a name="FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.get"></a>

```go
func Get(index *f64) FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference <a name="FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.resetSecondaryGids">ResetSecondaryGids</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecondaryGids` <a name="ResetSecondaryGids" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.resetSecondaryGids"></a>

```go
func ResetSecondaryGids()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.gidInput">GidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.secondaryGidsInput">SecondaryGidsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.uidInput">UidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.gid">Gid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.secondaryGids">SecondaryGids</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.uid">Uid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.gidInput"></a>

```go
func GidInput() *f64
```

- *Type:* *f64

---

##### `SecondaryGidsInput`<sup>Optional</sup> <a name="SecondaryGidsInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.secondaryGidsInput"></a>

```go
func SecondaryGidsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.uidInput"></a>

```go
func UidInput() *f64
```

- *Type:* *f64

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.gid"></a>

```go
func Gid() *f64
```

- *Type:* *f64

---

##### `SecondaryGids`<sup>Required</sup> <a name="SecondaryGids" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.secondaryGids"></a>

```go
func SecondaryGids() *[]*f64
```

- *Type:* *[]*f64

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.uid"></a>

```go
func Uid() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentOpenzfsConfigurationList <a name="FsxS3AccessPointAttachmentOpenzfsConfigurationList" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentOpenzfsConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxS3AccessPointAttachmentOpenzfsConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.get"></a>

```go
func Get(index *f64) FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference <a name="FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.putFileSystemIdentity">PutFileSystemIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.resetFileSystemIdentity">ResetFileSystemIdentity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFileSystemIdentity` <a name="PutFileSystemIdentity" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.putFileSystemIdentity"></a>

```go
func PutFileSystemIdentity(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.putFileSystemIdentity.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFileSystemIdentity` <a name="ResetFileSystemIdentity" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.resetFileSystemIdentity"></a>

```go
func ResetFileSystemIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.property.fileSystemIdentity">FileSystemIdentity</a></code> | <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList">FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.property.fileSystemIdentityInput">FileSystemIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.property.volumeIdInput">VolumeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileSystemIdentity`<sup>Required</sup> <a name="FileSystemIdentity" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.property.fileSystemIdentity"></a>

```go
func FileSystemIdentity() FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList">FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList</a>

---

##### `FileSystemIdentityInput`<sup>Optional</sup> <a name="FileSystemIdentityInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.property.fileSystemIdentityInput"></a>

```go
func FileSystemIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.property.volumeIdInput"></a>

```go
func VolumeIdInput() *string
```

- *Type:* *string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentS3AccessPointList <a name="FsxS3AccessPointAttachmentS3AccessPointList" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentS3AccessPointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxS3AccessPointAttachmentS3AccessPointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.get"></a>

```go
func Get(index *f64) FsxS3AccessPointAttachmentS3AccessPointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentS3AccessPointOutputReference <a name="FsxS3AccessPointAttachmentS3AccessPointOutputReference" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentS3AccessPointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxS3AccessPointAttachmentS3AccessPointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.putVpcConfiguration">PutVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resetVpcConfiguration">ResetVpcConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfiguration` <a name="PutVpcConfiguration" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.putVpcConfiguration"></a>

```go
func PutVpcConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.putVpcConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetVpcConfiguration` <a name="ResetVpcConfiguration" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.resetVpcConfiguration"></a>

```go
func ResetVpcConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList">FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.vpcConfigurationInput">VpcConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.vpcConfiguration"></a>

```go
func VpcConfiguration() FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList">FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `VpcConfigurationInput`<sup>Optional</sup> <a name="VpcConfigurationInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.vpcConfigurationInput"></a>

```go
func VpcConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList <a name="FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.get"></a>

```go
func Get(index *f64) FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference <a name="FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.resetVpcId"></a>

```go
func ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxS3AccessPointAttachmentTimeoutsOutputReference <a name="FsxS3AccessPointAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/fsxs3accesspointattachment"

fsxs3accesspointattachment.NewFsxS3AccessPointAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxS3AccessPointAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxS3AccessPointAttachment.FsxS3AccessPointAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



