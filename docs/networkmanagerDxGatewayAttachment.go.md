# `networkmanagerDxGatewayAttachment` Submodule <a name="`networkmanagerDxGatewayAttachment` Submodule" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerDxGatewayAttachment <a name="NetworkmanagerDxGatewayAttachment" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/networkmanager_dx_gateway_attachment aws_networkmanager_dx_gateway_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkmanagerdxgatewayattachment"

networkmanagerdxgatewayattachment.NewNetworkmanagerDxGatewayAttachment(scope Construct, id *string, config NetworkmanagerDxGatewayAttachmentConfig) NetworkmanagerDxGatewayAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig">NetworkmanagerDxGatewayAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig">NetworkmanagerDxGatewayAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.putTimeouts"></a>

```go
func PutTimeouts(value NetworkmanagerDxGatewayAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts">NetworkmanagerDxGatewayAttachmentTimeouts</a>

---

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkmanagerDxGatewayAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkmanagerdxgatewayattachment"

networkmanagerdxgatewayattachment.NetworkmanagerDxGatewayAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkmanagerdxgatewayattachment"

networkmanagerdxgatewayattachment.NetworkmanagerDxGatewayAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkmanagerdxgatewayattachment"

networkmanagerdxgatewayattachment.NetworkmanagerDxGatewayAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkmanagerdxgatewayattachment"

networkmanagerdxgatewayattachment.NetworkmanagerDxGatewayAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkmanagerDxGatewayAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkmanagerDxGatewayAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkmanagerDxGatewayAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/networkmanager_dx_gateway_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkmanagerDxGatewayAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.ownerAccountId">OwnerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.segmentName">SegmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference">NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.coreNetworkIdInput">CoreNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.directConnectGatewayArnInput">DirectConnectGatewayArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.edgeLocationsInput">EdgeLocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.coreNetworkId">CoreNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.directConnectGatewayArn">DirectConnectGatewayArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.edgeLocations">EdgeLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.attachmentPolicyRuleNumber"></a>

```go
func AttachmentPolicyRuleNumber() *f64
```

- *Type:* *f64

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.attachmentType"></a>

```go
func AttachmentType() *string
```

- *Type:* *string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.coreNetworkArn"></a>

```go
func CoreNetworkArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.ownerAccountId"></a>

```go
func OwnerAccountId() *string
```

- *Type:* *string

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.segmentName"></a>

```go
func SegmentName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.timeouts"></a>

```go
func Timeouts() NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference">NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference</a>

---

##### `CoreNetworkIdInput`<sup>Optional</sup> <a name="CoreNetworkIdInput" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.coreNetworkIdInput"></a>

```go
func CoreNetworkIdInput() *string
```

- *Type:* *string

---

##### `DirectConnectGatewayArnInput`<sup>Optional</sup> <a name="DirectConnectGatewayArnInput" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.directConnectGatewayArnInput"></a>

```go
func DirectConnectGatewayArnInput() *string
```

- *Type:* *string

---

##### `EdgeLocationsInput`<sup>Optional</sup> <a name="EdgeLocationsInput" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.edgeLocationsInput"></a>

```go
func EdgeLocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.coreNetworkId"></a>

```go
func CoreNetworkId() *string
```

- *Type:* *string

---

##### `DirectConnectGatewayArn`<sup>Required</sup> <a name="DirectConnectGatewayArn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.directConnectGatewayArn"></a>

```go
func DirectConnectGatewayArn() *string
```

- *Type:* *string

---

##### `EdgeLocations`<sup>Required</sup> <a name="EdgeLocations" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.edgeLocations"></a>

```go
func EdgeLocations() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerDxGatewayAttachmentConfig <a name="NetworkmanagerDxGatewayAttachmentConfig" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkmanagerdxgatewayattachment"

&networkmanagerdxgatewayattachment.NetworkmanagerDxGatewayAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CoreNetworkId: *string,
	DirectConnectGatewayArn: *string,
	EdgeLocations: *[]*string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.coreNetworkId">CoreNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/networkmanager_dx_gateway_attachment#core_network_id NetworkmanagerDxGatewayAttachment#core_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.directConnectGatewayArn">DirectConnectGatewayArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/networkmanager_dx_gateway_attachment#direct_connect_gateway_arn NetworkmanagerDxGatewayAttachment#direct_connect_gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.edgeLocations">EdgeLocations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/networkmanager_dx_gateway_attachment#edge_locations NetworkmanagerDxGatewayAttachment#edge_locations}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/networkmanager_dx_gateway_attachment#tags NetworkmanagerDxGatewayAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts">NetworkmanagerDxGatewayAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.coreNetworkId"></a>

```go
CoreNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/networkmanager_dx_gateway_attachment#core_network_id NetworkmanagerDxGatewayAttachment#core_network_id}.

---

##### `DirectConnectGatewayArn`<sup>Required</sup> <a name="DirectConnectGatewayArn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.directConnectGatewayArn"></a>

```go
DirectConnectGatewayArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/networkmanager_dx_gateway_attachment#direct_connect_gateway_arn NetworkmanagerDxGatewayAttachment#direct_connect_gateway_arn}.

---

##### `EdgeLocations`<sup>Required</sup> <a name="EdgeLocations" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.edgeLocations"></a>

```go
EdgeLocations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/networkmanager_dx_gateway_attachment#edge_locations NetworkmanagerDxGatewayAttachment#edge_locations}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/networkmanager_dx_gateway_attachment#tags NetworkmanagerDxGatewayAttachment#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentConfig.property.timeouts"></a>

```go
Timeouts NetworkmanagerDxGatewayAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts">NetworkmanagerDxGatewayAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/networkmanager_dx_gateway_attachment#timeouts NetworkmanagerDxGatewayAttachment#timeouts}

---

### NetworkmanagerDxGatewayAttachmentTimeouts <a name="NetworkmanagerDxGatewayAttachmentTimeouts" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkmanagerdxgatewayattachment"

&networkmanagerdxgatewayattachment.NetworkmanagerDxGatewayAttachmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/networkmanager_dx_gateway_attachment#create NetworkmanagerDxGatewayAttachment#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/networkmanager_dx_gateway_attachment#delete NetworkmanagerDxGatewayAttachment#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/networkmanager_dx_gateway_attachment#update NetworkmanagerDxGatewayAttachment#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference <a name="NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/networkmanagerdxgatewayattachment"

networkmanagerdxgatewayattachment.NewNetworkmanagerDxGatewayAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkmanagerDxGatewayAttachment.NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



