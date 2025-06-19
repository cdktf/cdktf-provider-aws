# `appfabricAppAuthorizationConnection` Submodule <a name="`appfabricAppAuthorizationConnection` Submodule" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppfabricAppAuthorizationConnection <a name="AppfabricAppAuthorizationConnection" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_app_authorization_connection aws_appfabric_app_authorization_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorizationconnection"

appfabricappauthorizationconnection.NewAppfabricAppAuthorizationConnection(scope Construct, id *string, config AppfabricAppAuthorizationConnectionConfig) AppfabricAppAuthorizationConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig">AppfabricAppAuthorizationConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig">AppfabricAppAuthorizationConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putAuthRequest">PutAuthRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetAuthRequest">ResetAuthRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthRequest` <a name="PutAuthRequest" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putAuthRequest"></a>

```go
func PutAuthRequest(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putAuthRequest.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putTimeouts"></a>

```go
func PutTimeouts(value AppfabricAppAuthorizationConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>

---

##### `ResetAuthRequest` <a name="ResetAuthRequest" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetAuthRequest"></a>

```go
func ResetAuthRequest()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppfabricAppAuthorizationConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorizationconnection"

appfabricappauthorizationconnection.AppfabricAppAuthorizationConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorizationconnection"

appfabricappauthorizationconnection.AppfabricAppAuthorizationConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorizationconnection"

appfabricappauthorizationconnection.AppfabricAppAuthorizationConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorizationconnection"

appfabricappauthorizationconnection.AppfabricAppAuthorizationConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppfabricAppAuthorizationConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppfabricAppAuthorizationConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppfabricAppAuthorizationConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_app_authorization_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppfabricAppAuthorizationConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.app">App</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.authRequest">AuthRequest</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList">AppfabricAppAuthorizationConnectionAuthRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.tenant">Tenant</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList">AppfabricAppAuthorizationConnectionTenantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference">AppfabricAppAuthorizationConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appAuthorizationArnInput">AppAuthorizationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appBundleArnInput">AppBundleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.authRequestInput">AuthRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appAuthorizationArn">AppAuthorizationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appBundleArn">AppBundleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.app"></a>

```go
func App() *string
```

- *Type:* *string

---

##### `AuthRequest`<sup>Required</sup> <a name="AuthRequest" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.authRequest"></a>

```go
func AuthRequest() AppfabricAppAuthorizationConnectionAuthRequestList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList">AppfabricAppAuthorizationConnectionAuthRequestList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.tenant"></a>

```go
func Tenant() AppfabricAppAuthorizationConnectionTenantList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList">AppfabricAppAuthorizationConnectionTenantList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.timeouts"></a>

```go
func Timeouts() AppfabricAppAuthorizationConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference">AppfabricAppAuthorizationConnectionTimeoutsOutputReference</a>

---

##### `AppAuthorizationArnInput`<sup>Optional</sup> <a name="AppAuthorizationArnInput" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appAuthorizationArnInput"></a>

```go
func AppAuthorizationArnInput() *string
```

- *Type:* *string

---

##### `AppBundleArnInput`<sup>Optional</sup> <a name="AppBundleArnInput" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appBundleArnInput"></a>

```go
func AppBundleArnInput() *string
```

- *Type:* *string

---

##### `AuthRequestInput`<sup>Optional</sup> <a name="AuthRequestInput" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.authRequestInput"></a>

```go
func AuthRequestInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AppAuthorizationArn`<sup>Required</sup> <a name="AppAuthorizationArn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appAuthorizationArn"></a>

```go
func AppAuthorizationArn() *string
```

- *Type:* *string

---

##### `AppBundleArn`<sup>Required</sup> <a name="AppBundleArn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appBundleArn"></a>

```go
func AppBundleArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppfabricAppAuthorizationConnectionAuthRequest <a name="AppfabricAppAuthorizationConnectionAuthRequest" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorizationconnection"

&appfabricappauthorizationconnection.AppfabricAppAuthorizationConnectionAuthRequest {
	Code: *string,
	RedirectUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.property.code">Code</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_app_authorization_connection#code AppfabricAppAuthorizationConnection#code}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.property.redirectUri">RedirectUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_app_authorization_connection#redirect_uri AppfabricAppAuthorizationConnection#redirect_uri}. |

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.property.code"></a>

```go
Code *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_app_authorization_connection#code AppfabricAppAuthorizationConnection#code}.

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.property.redirectUri"></a>

```go
RedirectUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_app_authorization_connection#redirect_uri AppfabricAppAuthorizationConnection#redirect_uri}.

---

### AppfabricAppAuthorizationConnectionConfig <a name="AppfabricAppAuthorizationConnectionConfig" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorizationconnection"

&appfabricappauthorizationconnection.AppfabricAppAuthorizationConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppAuthorizationArn: *string,
	AppBundleArn: *string,
	AuthRequest: interface{},
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.appAuthorizationArn">AppAuthorizationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_app_authorization_connection#app_authorization_arn AppfabricAppAuthorizationConnection#app_authorization_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.appBundleArn">AppBundleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_app_authorization_connection#app_bundle_arn AppfabricAppAuthorizationConnection#app_bundle_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.authRequest">AuthRequest</a></code> | <code>interface{}</code> | auth_request block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppAuthorizationArn`<sup>Required</sup> <a name="AppAuthorizationArn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.appAuthorizationArn"></a>

```go
AppAuthorizationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_app_authorization_connection#app_authorization_arn AppfabricAppAuthorizationConnection#app_authorization_arn}.

---

##### `AppBundleArn`<sup>Required</sup> <a name="AppBundleArn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.appBundleArn"></a>

```go
AppBundleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_app_authorization_connection#app_bundle_arn AppfabricAppAuthorizationConnection#app_bundle_arn}.

---

##### `AuthRequest`<sup>Optional</sup> <a name="AuthRequest" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.authRequest"></a>

```go
AuthRequest interface{}
```

- *Type:* interface{}

auth_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_app_authorization_connection#auth_request AppfabricAppAuthorizationConnection#auth_request}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_app_authorization_connection#region AppfabricAppAuthorizationConnection#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.timeouts"></a>

```go
Timeouts AppfabricAppAuthorizationConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_app_authorization_connection#timeouts AppfabricAppAuthorizationConnection#timeouts}

---

### AppfabricAppAuthorizationConnectionTenant <a name="AppfabricAppAuthorizationConnectionTenant" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorizationconnection"

&appfabricappauthorizationconnection.AppfabricAppAuthorizationConnectionTenant {

}
```


### AppfabricAppAuthorizationConnectionTimeouts <a name="AppfabricAppAuthorizationConnectionTimeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorizationconnection"

&appfabricappauthorizationconnection.AppfabricAppAuthorizationConnectionTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/appfabric_app_authorization_connection#create AppfabricAppAuthorizationConnection#create}

---

## Classes <a name="Classes" id="Classes"></a>

### AppfabricAppAuthorizationConnectionAuthRequestList <a name="AppfabricAppAuthorizationConnectionAuthRequestList" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorizationconnection"

appfabricappauthorizationconnection.NewAppfabricAppAuthorizationConnectionAuthRequestList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppfabricAppAuthorizationConnectionAuthRequestList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.get"></a>

```go
func Get(index *f64) AppfabricAppAuthorizationConnectionAuthRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricAppAuthorizationConnectionAuthRequestOutputReference <a name="AppfabricAppAuthorizationConnectionAuthRequestOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorizationconnection"

appfabricappauthorizationconnection.NewAppfabricAppAuthorizationConnectionAuthRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppfabricAppAuthorizationConnectionAuthRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.codeInput">CodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.redirectUriInput">RedirectUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.redirectUri">RedirectUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.codeInput"></a>

```go
func CodeInput() *string
```

- *Type:* *string

---

##### `RedirectUriInput`<sup>Optional</sup> <a name="RedirectUriInput" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.redirectUriInput"></a>

```go
func RedirectUriInput() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.redirectUri"></a>

```go
func RedirectUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricAppAuthorizationConnectionTenantList <a name="AppfabricAppAuthorizationConnectionTenantList" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorizationconnection"

appfabricappauthorizationconnection.NewAppfabricAppAuthorizationConnectionTenantList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppfabricAppAuthorizationConnectionTenantList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.get"></a>

```go
func Get(index *f64) AppfabricAppAuthorizationConnectionTenantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AppfabricAppAuthorizationConnectionTenantOutputReference <a name="AppfabricAppAuthorizationConnectionTenantOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorizationconnection"

appfabricappauthorizationconnection.NewAppfabricAppAuthorizationConnectionTenantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppfabricAppAuthorizationConnectionTenantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.tenantDisplayName">TenantDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.tenantIdentifier">TenantIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant">AppfabricAppAuthorizationConnectionTenant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TenantDisplayName`<sup>Required</sup> <a name="TenantDisplayName" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.tenantDisplayName"></a>

```go
func TenantDisplayName() *string
```

- *Type:* *string

---

##### `TenantIdentifier`<sup>Required</sup> <a name="TenantIdentifier" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.tenantIdentifier"></a>

```go
func TenantIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.internalValue"></a>

```go
func InternalValue() AppfabricAppAuthorizationConnectionTenant
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant">AppfabricAppAuthorizationConnectionTenant</a>

---


### AppfabricAppAuthorizationConnectionTimeoutsOutputReference <a name="AppfabricAppAuthorizationConnectionTimeoutsOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorizationconnection"

appfabricappauthorizationconnection.NewAppfabricAppAuthorizationConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppfabricAppAuthorizationConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



