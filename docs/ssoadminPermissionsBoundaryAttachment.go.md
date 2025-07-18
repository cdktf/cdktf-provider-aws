# `ssoadminPermissionsBoundaryAttachment` Submodule <a name="`ssoadminPermissionsBoundaryAttachment` Submodule" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminPermissionsBoundaryAttachment <a name="SsoadminPermissionsBoundaryAttachment" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment aws_ssoadmin_permissions_boundary_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ssoadminpermissionsboundaryattachment"

ssoadminpermissionsboundaryattachment.NewSsoadminPermissionsBoundaryAttachment(scope Construct, id *string, config SsoadminPermissionsBoundaryAttachmentConfig) SsoadminPermissionsBoundaryAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig">SsoadminPermissionsBoundaryAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig">SsoadminPermissionsBoundaryAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.putPermissionsBoundary">PutPermissionsBoundary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPermissionsBoundary` <a name="PutPermissionsBoundary" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.putPermissionsBoundary"></a>

```go
func PutPermissionsBoundary(value SsoadminPermissionsBoundaryAttachmentPermissionsBoundary)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.putPermissionsBoundary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundary">SsoadminPermissionsBoundaryAttachmentPermissionsBoundary</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.putTimeouts"></a>

```go
func PutTimeouts(value SsoadminPermissionsBoundaryAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeouts">SsoadminPermissionsBoundaryAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SsoadminPermissionsBoundaryAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ssoadminpermissionsboundaryattachment"

ssoadminpermissionsboundaryattachment.SsoadminPermissionsBoundaryAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ssoadminpermissionsboundaryattachment"

ssoadminpermissionsboundaryattachment.SsoadminPermissionsBoundaryAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ssoadminpermissionsboundaryattachment"

ssoadminpermissionsboundaryattachment.SsoadminPermissionsBoundaryAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ssoadminpermissionsboundaryattachment"

ssoadminpermissionsboundaryattachment.SsoadminPermissionsBoundaryAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SsoadminPermissionsBoundaryAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsoadminPermissionsBoundaryAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsoadminPermissionsBoundaryAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SsoadminPermissionsBoundaryAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.permissionsBoundary">PermissionsBoundary</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference">SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference">SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.permissionsBoundaryInput">PermissionsBoundaryInput</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundary">SsoadminPermissionsBoundaryAttachmentPermissionsBoundary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.permissionSetArnInput">PermissionSetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.permissionSetArn">PermissionSetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PermissionsBoundary`<sup>Required</sup> <a name="PermissionsBoundary" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.permissionsBoundary"></a>

```go
func PermissionsBoundary() SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference">SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.timeouts"></a>

```go
func Timeouts() SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference">SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `PermissionsBoundaryInput`<sup>Optional</sup> <a name="PermissionsBoundaryInput" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.permissionsBoundaryInput"></a>

```go
func PermissionsBoundaryInput() SsoadminPermissionsBoundaryAttachmentPermissionsBoundary
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundary">SsoadminPermissionsBoundaryAttachmentPermissionsBoundary</a>

---

##### `PermissionSetArnInput`<sup>Optional</sup> <a name="PermissionSetArnInput" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.permissionSetArnInput"></a>

```go
func PermissionSetArnInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `PermissionSetArn`<sup>Required</sup> <a name="PermissionSetArn" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.permissionSetArn"></a>

```go
func PermissionSetArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminPermissionsBoundaryAttachmentConfig <a name="SsoadminPermissionsBoundaryAttachmentConfig" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ssoadminpermissionsboundaryattachment"

&ssoadminpermissionsboundaryattachment.SsoadminPermissionsBoundaryAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceArn: *string,
	PermissionsBoundary: github.com/cdktf/cdktf-provider-aws-go/aws/v21.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundary,
	PermissionSetArn: *string,
	Id: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#instance_arn SsoadminPermissionsBoundaryAttachment#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.permissionsBoundary">PermissionsBoundary</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundary">SsoadminPermissionsBoundaryAttachmentPermissionsBoundary</a></code> | permissions_boundary block. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.permissionSetArn">PermissionSetArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#permission_set_arn SsoadminPermissionsBoundaryAttachment#permission_set_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#id SsoadminPermissionsBoundaryAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeouts">SsoadminPermissionsBoundaryAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#instance_arn SsoadminPermissionsBoundaryAttachment#instance_arn}.

---

##### `PermissionsBoundary`<sup>Required</sup> <a name="PermissionsBoundary" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.permissionsBoundary"></a>

```go
PermissionsBoundary SsoadminPermissionsBoundaryAttachmentPermissionsBoundary
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundary">SsoadminPermissionsBoundaryAttachmentPermissionsBoundary</a>

permissions_boundary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#permissions_boundary SsoadminPermissionsBoundaryAttachment#permissions_boundary}

---

##### `PermissionSetArn`<sup>Required</sup> <a name="PermissionSetArn" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.permissionSetArn"></a>

```go
PermissionSetArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#permission_set_arn SsoadminPermissionsBoundaryAttachment#permission_set_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#id SsoadminPermissionsBoundaryAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#region SsoadminPermissionsBoundaryAttachment#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentConfig.property.timeouts"></a>

```go
Timeouts SsoadminPermissionsBoundaryAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeouts">SsoadminPermissionsBoundaryAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#timeouts SsoadminPermissionsBoundaryAttachment#timeouts}

---

### SsoadminPermissionsBoundaryAttachmentPermissionsBoundary <a name="SsoadminPermissionsBoundaryAttachmentPermissionsBoundary" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundary.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ssoadminpermissionsboundaryattachment"

&ssoadminpermissionsboundaryattachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundary {
	CustomerManagedPolicyReference: github.com/cdktf/cdktf-provider-aws-go/aws/v21.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference,
	ManagedPolicyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundary.property.customerManagedPolicyReference">CustomerManagedPolicyReference</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference">SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference</a></code> | customer_managed_policy_reference block. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundary.property.managedPolicyArn">ManagedPolicyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#managed_policy_arn SsoadminPermissionsBoundaryAttachment#managed_policy_arn}. |

---

##### `CustomerManagedPolicyReference`<sup>Optional</sup> <a name="CustomerManagedPolicyReference" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundary.property.customerManagedPolicyReference"></a>

```go
CustomerManagedPolicyReference SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference">SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference</a>

customer_managed_policy_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#customer_managed_policy_reference SsoadminPermissionsBoundaryAttachment#customer_managed_policy_reference}

---

##### `ManagedPolicyArn`<sup>Optional</sup> <a name="ManagedPolicyArn" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundary.property.managedPolicyArn"></a>

```go
ManagedPolicyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#managed_policy_arn SsoadminPermissionsBoundaryAttachment#managed_policy_arn}.

---

### SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference <a name="SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ssoadminpermissionsboundaryattachment"

&ssoadminpermissionsboundaryattachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference {
	Name: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#name SsoadminPermissionsBoundaryAttachment#name}. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#path SsoadminPermissionsBoundaryAttachment#path}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#name SsoadminPermissionsBoundaryAttachment#name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#path SsoadminPermissionsBoundaryAttachment#path}.

---

### SsoadminPermissionsBoundaryAttachmentTimeouts <a name="SsoadminPermissionsBoundaryAttachmentTimeouts" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ssoadminpermissionsboundaryattachment"

&ssoadminpermissionsboundaryattachment.SsoadminPermissionsBoundaryAttachmentTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#create SsoadminPermissionsBoundaryAttachment#create}. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#delete SsoadminPermissionsBoundaryAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#create SsoadminPermissionsBoundaryAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/ssoadmin_permissions_boundary_attachment#delete SsoadminPermissionsBoundaryAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference <a name="SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ssoadminpermissionsboundaryattachment"

ssoadminpermissionsboundaryattachment.NewSsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference">SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference">SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference</a>

---


### SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference <a name="SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ssoadminpermissionsboundaryattachment"

ssoadminpermissionsboundaryattachment.NewSsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.putCustomerManagedPolicyReference">PutCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.resetCustomerManagedPolicyReference">ResetCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.resetManagedPolicyArn">ResetManagedPolicyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerManagedPolicyReference` <a name="PutCustomerManagedPolicyReference" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.putCustomerManagedPolicyReference"></a>

```go
func PutCustomerManagedPolicyReference(value SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.putCustomerManagedPolicyReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference">SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference</a>

---

##### `ResetCustomerManagedPolicyReference` <a name="ResetCustomerManagedPolicyReference" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.resetCustomerManagedPolicyReference"></a>

```go
func ResetCustomerManagedPolicyReference()
```

##### `ResetManagedPolicyArn` <a name="ResetManagedPolicyArn" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.resetManagedPolicyArn"></a>

```go
func ResetManagedPolicyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.property.customerManagedPolicyReference">CustomerManagedPolicyReference</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference">SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.property.customerManagedPolicyReferenceInput">CustomerManagedPolicyReferenceInput</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference">SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.property.managedPolicyArnInput">ManagedPolicyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.property.managedPolicyArn">ManagedPolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundary">SsoadminPermissionsBoundaryAttachmentPermissionsBoundary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManagedPolicyReference`<sup>Required</sup> <a name="CustomerManagedPolicyReference" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.property.customerManagedPolicyReference"></a>

```go
func CustomerManagedPolicyReference() SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference">SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference</a>

---

##### `CustomerManagedPolicyReferenceInput`<sup>Optional</sup> <a name="CustomerManagedPolicyReferenceInput" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.property.customerManagedPolicyReferenceInput"></a>

```go
func CustomerManagedPolicyReferenceInput() SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference">SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryCustomerManagedPolicyReference</a>

---

##### `ManagedPolicyArnInput`<sup>Optional</sup> <a name="ManagedPolicyArnInput" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.property.managedPolicyArnInput"></a>

```go
func ManagedPolicyArnInput() *string
```

- *Type:* *string

---

##### `ManagedPolicyArn`<sup>Required</sup> <a name="ManagedPolicyArn" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.property.managedPolicyArn"></a>

```go
func ManagedPolicyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundaryOutputReference.property.internalValue"></a>

```go
func InternalValue() SsoadminPermissionsBoundaryAttachmentPermissionsBoundary
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentPermissionsBoundary">SsoadminPermissionsBoundaryAttachmentPermissionsBoundary</a>

---


### SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference <a name="SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ssoadminpermissionsboundaryattachment"

ssoadminpermissionsboundaryattachment.NewSsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssoadminPermissionsBoundaryAttachment.SsoadminPermissionsBoundaryAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



