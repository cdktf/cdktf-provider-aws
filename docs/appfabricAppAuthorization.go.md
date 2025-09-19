# `appfabricAppAuthorization` Submodule <a name="`appfabricAppAuthorization` Submodule" id="@cdktf/provider-aws.appfabricAppAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppfabricAppAuthorization <a name="AppfabricAppAuthorization" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization aws_appfabric_app_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

appfabricappauthorization.NewAppfabricAppAuthorization(scope Construct, id *string, config AppfabricAppAuthorizationConfig) AppfabricAppAuthorization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig">AppfabricAppAuthorizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig">AppfabricAppAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putCredential">PutCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTenant">PutTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetCredential">ResetCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTenant">ResetTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCredential` <a name="PutCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putCredential"></a>

```go
func PutCredential(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putCredential.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTenant` <a name="PutTenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTenant"></a>

```go
func PutTenant(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTenant.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTimeouts"></a>

```go
func PutTimeouts(value AppfabricAppAuthorizationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>

---

##### `ResetCredential` <a name="ResetCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetCredential"></a>

```go
func ResetCredential()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTenant` <a name="ResetTenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTenant"></a>

```go
func ResetTenant()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppfabricAppAuthorization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

appfabricappauthorization.AppfabricAppAuthorization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

appfabricappauthorization.AppfabricAppAuthorization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

appfabricappauthorization.AppfabricAppAuthorization_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

appfabricappauthorization.AppfabricAppAuthorization_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppfabricAppAuthorization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppfabricAppAuthorization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppfabricAppAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppfabricAppAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authUrl">AuthUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.credential">Credential</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList">AppfabricAppAuthorizationCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.persona">Persona</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenant">Tenant</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList">AppfabricAppAuthorizationTenantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference">AppfabricAppAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArnInput">AppBundleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appInput">AppInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.credentialInput">CredentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenantInput">TenantInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.app">App</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArn">AppBundleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authUrl"></a>

```go
func AuthUrl() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.credential"></a>

```go
func Credential() AppfabricAppAuthorizationCredentialList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList">AppfabricAppAuthorizationCredentialList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Persona`<sup>Required</sup> <a name="Persona" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.persona"></a>

```go
func Persona() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenant"></a>

```go
func Tenant() AppfabricAppAuthorizationTenantList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList">AppfabricAppAuthorizationTenantList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.timeouts"></a>

```go
func Timeouts() AppfabricAppAuthorizationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference">AppfabricAppAuthorizationTimeoutsOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AppBundleArnInput`<sup>Optional</sup> <a name="AppBundleArnInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArnInput"></a>

```go
func AppBundleArnInput() *string
```

- *Type:* *string

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appInput"></a>

```go
func AppInput() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `CredentialInput`<sup>Optional</sup> <a name="CredentialInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.credentialInput"></a>

```go
func CredentialInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenantInput"></a>

```go
func TenantInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.app"></a>

```go
func App() *string
```

- *Type:* *string

---

##### `AppBundleArn`<sup>Required</sup> <a name="AppBundleArn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArn"></a>

```go
func AppBundleArn() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppfabricAppAuthorizationConfig <a name="AppfabricAppAuthorizationConfig" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

&appfabricappauthorization.AppfabricAppAuthorizationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	App: *string,
	AppBundleArn: *string,
	AuthType: *string,
	Credential: interface{},
	Region: *string,
	Tags: *map[string]*string,
	Tenant: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.app">App</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#app AppfabricAppAuthorization#app}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.appBundleArn">AppBundleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#app_bundle_arn AppfabricAppAuthorization#app_bundle_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.authType">AuthType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#auth_type AppfabricAppAuthorization#auth_type}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.credential">Credential</a></code> | <code>interface{}</code> | credential block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#tags AppfabricAppAuthorization#tags}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tenant">Tenant</a></code> | <code>interface{}</code> | tenant block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.app"></a>

```go
App *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#app AppfabricAppAuthorization#app}.

---

##### `AppBundleArn`<sup>Required</sup> <a name="AppBundleArn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.appBundleArn"></a>

```go
AppBundleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#app_bundle_arn AppfabricAppAuthorization#app_bundle_arn}.

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#auth_type AppfabricAppAuthorization#auth_type}.

---

##### `Credential`<sup>Optional</sup> <a name="Credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.credential"></a>

```go
Credential interface{}
```

- *Type:* interface{}

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#credential AppfabricAppAuthorization#credential}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#region AppfabricAppAuthorization#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#tags AppfabricAppAuthorization#tags}.

---

##### `Tenant`<sup>Optional</sup> <a name="Tenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tenant"></a>

```go
Tenant interface{}
```

- *Type:* interface{}

tenant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#tenant AppfabricAppAuthorization#tenant}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.timeouts"></a>

```go
Timeouts AppfabricAppAuthorizationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#timeouts AppfabricAppAuthorization#timeouts}

---

### AppfabricAppAuthorizationCredential <a name="AppfabricAppAuthorizationCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

&appfabricappauthorization.AppfabricAppAuthorizationCredential {
	ApiKeyCredential: interface{},
	Oauth2Credential: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.apiKeyCredential">ApiKeyCredential</a></code> | <code>interface{}</code> | api_key_credential block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.oauth2Credential">Oauth2Credential</a></code> | <code>interface{}</code> | oauth2_credential block. |

---

##### `ApiKeyCredential`<sup>Optional</sup> <a name="ApiKeyCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.apiKeyCredential"></a>

```go
ApiKeyCredential interface{}
```

- *Type:* interface{}

api_key_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#api_key_credential AppfabricAppAuthorization#api_key_credential}

---

##### `Oauth2Credential`<sup>Optional</sup> <a name="Oauth2Credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.oauth2Credential"></a>

```go
Oauth2Credential interface{}
```

- *Type:* interface{}

oauth2_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#oauth2_credential AppfabricAppAuthorization#oauth2_credential}

---

### AppfabricAppAuthorizationCredentialApiKeyCredential <a name="AppfabricAppAuthorizationCredentialApiKeyCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

&appfabricappauthorization.AppfabricAppAuthorizationCredentialApiKeyCredential {
	ApiKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential.property.apiKey">ApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#api_key AppfabricAppAuthorization#api_key}. |

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential.property.apiKey"></a>

```go
ApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#api_key AppfabricAppAuthorization#api_key}.

---

### AppfabricAppAuthorizationCredentialOauth2Credential <a name="AppfabricAppAuthorizationCredentialOauth2Credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

&appfabricappauthorization.AppfabricAppAuthorizationCredentialOauth2Credential {
	ClientId: *string,
	ClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#client_id AppfabricAppAuthorization#client_id}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#client_secret AppfabricAppAuthorization#client_secret}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#client_id AppfabricAppAuthorization#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#client_secret AppfabricAppAuthorization#client_secret}.

---

### AppfabricAppAuthorizationTenant <a name="AppfabricAppAuthorizationTenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

&appfabricappauthorization.AppfabricAppAuthorizationTenant {
	TenantDisplayName: *string,
	TenantIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantDisplayName">TenantDisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#tenant_display_name AppfabricAppAuthorization#tenant_display_name}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantIdentifier">TenantIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#tenant_identifier AppfabricAppAuthorization#tenant_identifier}. |

---

##### `TenantDisplayName`<sup>Required</sup> <a name="TenantDisplayName" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantDisplayName"></a>

```go
TenantDisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#tenant_display_name AppfabricAppAuthorization#tenant_display_name}.

---

##### `TenantIdentifier`<sup>Required</sup> <a name="TenantIdentifier" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantIdentifier"></a>

```go
TenantIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#tenant_identifier AppfabricAppAuthorization#tenant_identifier}.

---

### AppfabricAppAuthorizationTimeouts <a name="AppfabricAppAuthorizationTimeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

&appfabricappauthorization.AppfabricAppAuthorizationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#create AppfabricAppAuthorization#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#delete AppfabricAppAuthorization#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/appfabric_app_authorization#update AppfabricAppAuthorization#update}

---

## Classes <a name="Classes" id="Classes"></a>

### AppfabricAppAuthorizationCredentialApiKeyCredentialList <a name="AppfabricAppAuthorizationCredentialApiKeyCredentialList" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

appfabricappauthorization.NewAppfabricAppAuthorizationCredentialApiKeyCredentialList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppfabricAppAuthorizationCredentialApiKeyCredentialList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.get"></a>

```go
func Get(index *f64) AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference <a name="AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

appfabricappauthorization.NewAppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricAppAuthorizationCredentialList <a name="AppfabricAppAuthorizationCredentialList" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

appfabricappauthorization.NewAppfabricAppAuthorizationCredentialList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppfabricAppAuthorizationCredentialList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.get"></a>

```go
func Get(index *f64) AppfabricAppAuthorizationCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricAppAuthorizationCredentialOauth2CredentialList <a name="AppfabricAppAuthorizationCredentialOauth2CredentialList" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

appfabricappauthorization.NewAppfabricAppAuthorizationCredentialOauth2CredentialList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppfabricAppAuthorizationCredentialOauth2CredentialList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.get"></a>

```go
func Get(index *f64) AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference <a name="AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

appfabricappauthorization.NewAppfabricAppAuthorizationCredentialOauth2CredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricAppAuthorizationCredentialOutputReference <a name="AppfabricAppAuthorizationCredentialOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

appfabricappauthorization.NewAppfabricAppAuthorizationCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppfabricAppAuthorizationCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putApiKeyCredential">PutApiKeyCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putOauth2Credential">PutOauth2Credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetApiKeyCredential">ResetApiKeyCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetOauth2Credential">ResetOauth2Credential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyCredential` <a name="PutApiKeyCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putApiKeyCredential"></a>

```go
func PutApiKeyCredential(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putApiKeyCredential.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOauth2Credential` <a name="PutOauth2Credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putOauth2Credential"></a>

```go
func PutOauth2Credential(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putOauth2Credential.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApiKeyCredential` <a name="ResetApiKeyCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetApiKeyCredential"></a>

```go
func ResetApiKeyCredential()
```

##### `ResetOauth2Credential` <a name="ResetOauth2Credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetOauth2Credential"></a>

```go
func ResetOauth2Credential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredential">ApiKeyCredential</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList">AppfabricAppAuthorizationCredentialApiKeyCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2Credential">Oauth2Credential</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList">AppfabricAppAuthorizationCredentialOauth2CredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredentialInput">ApiKeyCredentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2CredentialInput">Oauth2CredentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyCredential`<sup>Required</sup> <a name="ApiKeyCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredential"></a>

```go
func ApiKeyCredential() AppfabricAppAuthorizationCredentialApiKeyCredentialList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList">AppfabricAppAuthorizationCredentialApiKeyCredentialList</a>

---

##### `Oauth2Credential`<sup>Required</sup> <a name="Oauth2Credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2Credential"></a>

```go
func Oauth2Credential() AppfabricAppAuthorizationCredentialOauth2CredentialList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList">AppfabricAppAuthorizationCredentialOauth2CredentialList</a>

---

##### `ApiKeyCredentialInput`<sup>Optional</sup> <a name="ApiKeyCredentialInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredentialInput"></a>

```go
func ApiKeyCredentialInput() interface{}
```

- *Type:* interface{}

---

##### `Oauth2CredentialInput`<sup>Optional</sup> <a name="Oauth2CredentialInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2CredentialInput"></a>

```go
func Oauth2CredentialInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricAppAuthorizationTenantList <a name="AppfabricAppAuthorizationTenantList" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

appfabricappauthorization.NewAppfabricAppAuthorizationTenantList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppfabricAppAuthorizationTenantList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.get"></a>

```go
func Get(index *f64) AppfabricAppAuthorizationTenantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricAppAuthorizationTenantOutputReference <a name="AppfabricAppAuthorizationTenantOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

appfabricappauthorization.NewAppfabricAppAuthorizationTenantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppfabricAppAuthorizationTenantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayNameInput">TenantDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifierInput">TenantIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayName">TenantDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifier">TenantIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TenantDisplayNameInput`<sup>Optional</sup> <a name="TenantDisplayNameInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayNameInput"></a>

```go
func TenantDisplayNameInput() *string
```

- *Type:* *string

---

##### `TenantIdentifierInput`<sup>Optional</sup> <a name="TenantIdentifierInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifierInput"></a>

```go
func TenantIdentifierInput() *string
```

- *Type:* *string

---

##### `TenantDisplayName`<sup>Required</sup> <a name="TenantDisplayName" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayName"></a>

```go
func TenantDisplayName() *string
```

- *Type:* *string

---

##### `TenantIdentifier`<sup>Required</sup> <a name="TenantIdentifier" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifier"></a>

```go
func TenantIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppfabricAppAuthorizationTimeoutsOutputReference <a name="AppfabricAppAuthorizationTimeoutsOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appfabricappauthorization"

appfabricappauthorization.NewAppfabricAppAuthorizationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppfabricAppAuthorizationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



