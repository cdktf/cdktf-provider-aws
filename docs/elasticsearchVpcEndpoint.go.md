# `elasticsearchVpcEndpoint` Submodule <a name="`elasticsearchVpcEndpoint` Submodule" id="@cdktf/provider-aws.elasticsearchVpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticsearchVpcEndpoint <a name="ElasticsearchVpcEndpoint" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint aws_elasticsearch_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticsearchvpcendpoint"

elasticsearchvpcendpoint.NewElasticsearchVpcEndpoint(scope Construct, id *string, config ElasticsearchVpcEndpointConfig) ElasticsearchVpcEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig">ElasticsearchVpcEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig">ElasticsearchVpcEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putVpcOptions">PutVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value ElasticsearchVpcEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a>

---

##### `PutVpcOptions` <a name="PutVpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putVpcOptions"></a>

```go
func PutVpcOptions(value ElasticsearchVpcEndpointVpcOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putVpcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ElasticsearchVpcEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticsearchvpcendpoint"

elasticsearchvpcendpoint.ElasticsearchVpcEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticsearchvpcendpoint"

elasticsearchvpcendpoint.ElasticsearchVpcEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticsearchvpcendpoint"

elasticsearchvpcendpoint.ElasticsearchVpcEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticsearchvpcendpoint"

elasticsearchvpcendpoint.ElasticsearchVpcEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ElasticsearchVpcEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ElasticsearchVpcEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ElasticsearchVpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ElasticsearchVpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference">ElasticsearchVpcEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference">ElasticsearchVpcEndpointVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.domainArnInput">DomainArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.vpcOptionsInput">VpcOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.domainArn">DomainArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.timeouts"></a>

```go
func Timeouts() ElasticsearchVpcEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference">ElasticsearchVpcEndpointTimeoutsOutputReference</a>

---

##### `VpcOptions`<sup>Required</sup> <a name="VpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.vpcOptions"></a>

```go
func VpcOptions() ElasticsearchVpcEndpointVpcOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference">ElasticsearchVpcEndpointVpcOptionsOutputReference</a>

---

##### `DomainArnInput`<sup>Optional</sup> <a name="DomainArnInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.domainArnInput"></a>

```go
func DomainArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcOptionsInput`<sup>Optional</sup> <a name="VpcOptionsInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.vpcOptionsInput"></a>

```go
func VpcOptionsInput() ElasticsearchVpcEndpointVpcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

---

##### `DomainArn`<sup>Required</sup> <a name="DomainArn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.domainArn"></a>

```go
func DomainArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticsearchVpcEndpointConfig <a name="ElasticsearchVpcEndpointConfig" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticsearchvpcendpoint"

&elasticsearchvpcendpoint.ElasticsearchVpcEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainArn: *string,
	VpcOptions: github.com/cdktf/cdktf-provider-aws-go/aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.domainArn">DomainArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#domain_arn ElasticsearchVpcEndpoint#domain_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a></code> | vpc_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#id ElasticsearchVpcEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainArn`<sup>Required</sup> <a name="DomainArn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.domainArn"></a>

```go
DomainArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#domain_arn ElasticsearchVpcEndpoint#domain_arn}.

---

##### `VpcOptions`<sup>Required</sup> <a name="VpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.vpcOptions"></a>

```go
VpcOptions ElasticsearchVpcEndpointVpcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

vpc_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#vpc_options ElasticsearchVpcEndpoint#vpc_options}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#id ElasticsearchVpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.timeouts"></a>

```go
Timeouts ElasticsearchVpcEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#timeouts ElasticsearchVpcEndpoint#timeouts}

---

### ElasticsearchVpcEndpointTimeouts <a name="ElasticsearchVpcEndpointTimeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticsearchvpcendpoint"

&elasticsearchvpcendpoint.ElasticsearchVpcEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#create ElasticsearchVpcEndpoint#create}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#delete ElasticsearchVpcEndpoint#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#update ElasticsearchVpcEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#create ElasticsearchVpcEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#delete ElasticsearchVpcEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#update ElasticsearchVpcEndpoint#update}.

---

### ElasticsearchVpcEndpointVpcOptions <a name="ElasticsearchVpcEndpointVpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticsearchvpcendpoint"

&elasticsearchvpcendpoint.ElasticsearchVpcEndpointVpcOptions {
	SubnetIds: *[]*string,
	SecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#subnet_ids ElasticsearchVpcEndpoint#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#security_group_ids ElasticsearchVpcEndpoint#security_group_ids}. |

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#subnet_ids ElasticsearchVpcEndpoint#subnet_ids}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/elasticsearch_vpc_endpoint#security_group_ids ElasticsearchVpcEndpoint#security_group_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticsearchVpcEndpointTimeoutsOutputReference <a name="ElasticsearchVpcEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticsearchvpcendpoint"

elasticsearchvpcendpoint.NewElasticsearchVpcEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticsearchVpcEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticsearchVpcEndpointVpcOptionsOutputReference <a name="ElasticsearchVpcEndpointVpcOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticsearchvpcendpoint"

elasticsearchvpcendpoint.NewElasticsearchVpcEndpointVpcOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticsearchVpcEndpointVpcOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ElasticsearchVpcEndpointVpcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

---



