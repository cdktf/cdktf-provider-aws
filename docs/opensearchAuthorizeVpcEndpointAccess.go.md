# `opensearchAuthorizeVpcEndpointAccess` Submodule <a name="`opensearchAuthorizeVpcEndpointAccess` Submodule" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchAuthorizeVpcEndpointAccess <a name="OpensearchAuthorizeVpcEndpointAccess" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/opensearch_authorize_vpc_endpoint_access aws_opensearch_authorize_vpc_endpoint_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/opensearchauthorizevpcendpointaccess"

opensearchauthorizevpcendpointaccess.NewOpensearchAuthorizeVpcEndpointAccess(scope Construct, id *string, config OpensearchAuthorizeVpcEndpointAccessConfig) OpensearchAuthorizeVpcEndpointAccess
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig">OpensearchAuthorizeVpcEndpointAccessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig">OpensearchAuthorizeVpcEndpointAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchAuthorizeVpcEndpointAccess resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/opensearchauthorizevpcendpointaccess"

opensearchauthorizevpcendpointaccess.OpensearchAuthorizeVpcEndpointAccess_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/opensearchauthorizevpcendpointaccess"

opensearchauthorizevpcendpointaccess.OpensearchAuthorizeVpcEndpointAccess_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/opensearchauthorizevpcendpointaccess"

opensearchauthorizevpcendpointaccess.OpensearchAuthorizeVpcEndpointAccess_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/opensearchauthorizevpcendpointaccess"

opensearchauthorizevpcendpointaccess.OpensearchAuthorizeVpcEndpointAccess_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OpensearchAuthorizeVpcEndpointAccess resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpensearchAuthorizeVpcEndpointAccess to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpensearchAuthorizeVpcEndpointAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/opensearch_authorize_vpc_endpoint_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchAuthorizeVpcEndpointAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.authorizedPrincipal">AuthorizedPrincipal</a></code> | <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList">OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.accountInput">AccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.account">Account</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizedPrincipal`<sup>Required</sup> <a name="AuthorizedPrincipal" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.authorizedPrincipal"></a>

```go
func AuthorizedPrincipal() OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList">OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList</a>

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.accountInput"></a>

```go
func AccountInput() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.account"></a>

```go
func Account() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal <a name="OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/opensearchauthorizevpcendpointaccess"

&opensearchauthorizevpcendpointaccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal {

}
```


### OpensearchAuthorizeVpcEndpointAccessConfig <a name="OpensearchAuthorizeVpcEndpointAccessConfig" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/opensearchauthorizevpcendpointaccess"

&opensearchauthorizevpcendpointaccess.OpensearchAuthorizeVpcEndpointAccessConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Account: *string,
	DomainName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.account">Account</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/opensearch_authorize_vpc_endpoint_access#account OpensearchAuthorizeVpcEndpointAccess#account}. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/opensearch_authorize_vpc_endpoint_access#domain_name OpensearchAuthorizeVpcEndpointAccess#domain_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.account"></a>

```go
Account *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/opensearch_authorize_vpc_endpoint_access#account OpensearchAuthorizeVpcEndpointAccess#account}.

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/opensearch_authorize_vpc_endpoint_access#domain_name OpensearchAuthorizeVpcEndpointAccess#domain_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList <a name="OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/opensearchauthorizevpcendpointaccess"

opensearchauthorizevpcendpointaccess.NewOpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.get"></a>

```go
func Get(index *f64) OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference <a name="OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/opensearchauthorizevpcendpointaccess"

opensearchauthorizevpcendpointaccess.NewOpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.principalType">PrincipalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal">OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `PrincipalType`<sup>Required</sup> <a name="PrincipalType" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.principalType"></a>

```go
func PrincipalType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal">OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal</a>

---



