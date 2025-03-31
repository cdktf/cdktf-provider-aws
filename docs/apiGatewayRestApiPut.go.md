# `apiGatewayRestApiPut` Submodule <a name="`apiGatewayRestApiPut` Submodule" id="@cdktf/provider-aws.apiGatewayRestApiPut"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayRestApiPut <a name="ApiGatewayRestApiPut" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/api_gateway_rest_api_put aws_api_gateway_rest_api_put}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/apigatewayrestapiput"

apigatewayrestapiput.NewApiGatewayRestApiPut(scope Construct, id *string, config ApiGatewayRestApiPutConfig) ApiGatewayRestApiPut
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig">ApiGatewayRestApiPutConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig">ApiGatewayRestApiPutConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetFailOnWarnings">ResetFailOnWarnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetTriggers">ResetTriggers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.putTimeouts"></a>

```go
func PutTimeouts(value ApiGatewayRestApiPutTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts">ApiGatewayRestApiPutTimeouts</a>

---

##### `ResetFailOnWarnings` <a name="ResetFailOnWarnings" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetFailOnWarnings"></a>

```go
func ResetFailOnWarnings()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetTriggers"></a>

```go
func ResetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiGatewayRestApiPut resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/apigatewayrestapiput"

apigatewayrestapiput.ApiGatewayRestApiPut_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/apigatewayrestapiput"

apigatewayrestapiput.ApiGatewayRestApiPut_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/apigatewayrestapiput"

apigatewayrestapiput.ApiGatewayRestApiPut_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/apigatewayrestapiput"

apigatewayrestapiput.ApiGatewayRestApiPut_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApiGatewayRestApiPut resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApiGatewayRestApiPut to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApiGatewayRestApiPut that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/api_gateway_rest_api_put#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApiGatewayRestApiPut to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference">ApiGatewayRestApiPutTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.failOnWarningsInput">FailOnWarningsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.restApiIdInput">RestApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.triggersInput">TriggersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.failOnWarnings">FailOnWarnings</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.restApiId">RestApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.triggers">Triggers</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.timeouts"></a>

```go
func Timeouts() ApiGatewayRestApiPutTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference">ApiGatewayRestApiPutTimeoutsOutputReference</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `FailOnWarningsInput`<sup>Optional</sup> <a name="FailOnWarningsInput" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.failOnWarningsInput"></a>

```go
func FailOnWarningsInput() interface{}
```

- *Type:* interface{}

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.restApiIdInput"></a>

```go
func RestApiIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.triggersInput"></a>

```go
func TriggersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `FailOnWarnings`<sup>Required</sup> <a name="FailOnWarnings" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.failOnWarnings"></a>

```go
func FailOnWarnings() interface{}
```

- *Type:* interface{}

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.restApiId"></a>

```go
func RestApiId() *string
```

- *Type:* *string

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.triggers"></a>

```go
func Triggers() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayRestApiPutConfig <a name="ApiGatewayRestApiPutConfig" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/apigatewayrestapiput"

&apigatewayrestapiput.ApiGatewayRestApiPutConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Body: *string,
	RestApiId: *string,
	FailOnWarnings: interface{},
	Parameters: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts,
	Triggers: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.body">Body</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/api_gateway_rest_api_put#body ApiGatewayRestApiPut#body}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.restApiId">RestApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/api_gateway_rest_api_put#rest_api_id ApiGatewayRestApiPut#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.failOnWarnings">FailOnWarnings</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/api_gateway_rest_api_put#fail_on_warnings ApiGatewayRestApiPut#fail_on_warnings}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/api_gateway_rest_api_put#parameters ApiGatewayRestApiPut#parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts">ApiGatewayRestApiPutTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.triggers">Triggers</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/api_gateway_rest_api_put#triggers ApiGatewayRestApiPut#triggers}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.body"></a>

```go
Body *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/api_gateway_rest_api_put#body ApiGatewayRestApiPut#body}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.restApiId"></a>

```go
RestApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/api_gateway_rest_api_put#rest_api_id ApiGatewayRestApiPut#rest_api_id}.

---

##### `FailOnWarnings`<sup>Optional</sup> <a name="FailOnWarnings" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.failOnWarnings"></a>

```go
FailOnWarnings interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/api_gateway_rest_api_put#fail_on_warnings ApiGatewayRestApiPut#fail_on_warnings}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/api_gateway_rest_api_put#parameters ApiGatewayRestApiPut#parameters}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.timeouts"></a>

```go
Timeouts ApiGatewayRestApiPutTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts">ApiGatewayRestApiPutTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/api_gateway_rest_api_put#timeouts ApiGatewayRestApiPut#timeouts}

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.triggers"></a>

```go
Triggers *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/api_gateway_rest_api_put#triggers ApiGatewayRestApiPut#triggers}.

---

### ApiGatewayRestApiPutTimeouts <a name="ApiGatewayRestApiPutTimeouts" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/apigatewayrestapiput"

&apigatewayrestapiput.ApiGatewayRestApiPutTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/api_gateway_rest_api_put#create ApiGatewayRestApiPut#create}

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayRestApiPutTimeoutsOutputReference <a name="ApiGatewayRestApiPutTimeoutsOutputReference" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/apigatewayrestapiput"

apigatewayrestapiput.NewApiGatewayRestApiPutTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiGatewayRestApiPutTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



