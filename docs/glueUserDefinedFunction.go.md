# `glueUserDefinedFunction` Submodule <a name="`glueUserDefinedFunction` Submodule" id="@cdktf/provider-aws.glueUserDefinedFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueUserDefinedFunction <a name="GlueUserDefinedFunction" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function aws_glue_user_defined_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueuserdefinedfunction"

glueuserdefinedfunction.NewGlueUserDefinedFunction(scope Construct, id *string, config GlueUserDefinedFunctionConfig) GlueUserDefinedFunction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig">GlueUserDefinedFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig">GlueUserDefinedFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.putResourceUris">PutResourceUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetResourceUris">ResetResourceUris</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutResourceUris` <a name="PutResourceUris" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.putResourceUris"></a>

```go
func PutResourceUris(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.putResourceUris.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceUris` <a name="ResetResourceUris" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetResourceUris"></a>

```go
func ResetResourceUris()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueuserdefinedfunction"

glueuserdefinedfunction.GlueUserDefinedFunction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueuserdefinedfunction"

glueuserdefinedfunction.GlueUserDefinedFunction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueuserdefinedfunction"

glueuserdefinedfunction.GlueUserDefinedFunction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUris">ResourceUris</a></code> | <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList">GlueUserDefinedFunctionResourceUrisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.classNameInput">ClassNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerNameInput">OwnerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerTypeInput">OwnerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUrisInput">ResourceUrisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.className">ClassName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerName">OwnerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerType">OwnerType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `ResourceUris`<sup>Required</sup> <a name="ResourceUris" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUris"></a>

```go
func ResourceUris() GlueUserDefinedFunctionResourceUrisList
```

- *Type:* <a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList">GlueUserDefinedFunctionResourceUrisList</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `ClassNameInput`<sup>Optional</sup> <a name="ClassNameInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.classNameInput"></a>

```go
func ClassNameInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerNameInput`<sup>Optional</sup> <a name="OwnerNameInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerNameInput"></a>

```go
func OwnerNameInput() *string
```

- *Type:* *string

---

##### `OwnerTypeInput`<sup>Optional</sup> <a name="OwnerTypeInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerTypeInput"></a>

```go
func OwnerTypeInput() *string
```

- *Type:* *string

---

##### `ResourceUrisInput`<sup>Optional</sup> <a name="ResourceUrisInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUrisInput"></a>

```go
func ResourceUrisInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.className"></a>

```go
func ClassName() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OwnerName`<sup>Required</sup> <a name="OwnerName" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerName"></a>

```go
func OwnerName() *string
```

- *Type:* *string

---

##### `OwnerType`<sup>Required</sup> <a name="OwnerType" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerType"></a>

```go
func OwnerType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueUserDefinedFunctionConfig <a name="GlueUserDefinedFunctionConfig" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueuserdefinedfunction"

&glueuserdefinedfunction.GlueUserDefinedFunctionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClassName: *string,
	DatabaseName: *string,
	Name: *string,
	OwnerName: *string,
	OwnerType: *string,
	CatalogId: *string,
	Id: *string,
	ResourceUris: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.className">ClassName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#class_name GlueUserDefinedFunction#class_name}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#database_name GlueUserDefinedFunction#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#name GlueUserDefinedFunction#name}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerName">OwnerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#owner_name GlueUserDefinedFunction#owner_name}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerType">OwnerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#owner_type GlueUserDefinedFunction#owner_type}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#catalog_id GlueUserDefinedFunction#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#id GlueUserDefinedFunction#id}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.resourceUris">ResourceUris</a></code> | <code>interface{}</code> | resource_uris block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.className"></a>

```go
ClassName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#class_name GlueUserDefinedFunction#class_name}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#database_name GlueUserDefinedFunction#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#name GlueUserDefinedFunction#name}.

---

##### `OwnerName`<sup>Required</sup> <a name="OwnerName" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerName"></a>

```go
OwnerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#owner_name GlueUserDefinedFunction#owner_name}.

---

##### `OwnerType`<sup>Required</sup> <a name="OwnerType" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerType"></a>

```go
OwnerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#owner_type GlueUserDefinedFunction#owner_type}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#catalog_id GlueUserDefinedFunction#catalog_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#id GlueUserDefinedFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceUris`<sup>Optional</sup> <a name="ResourceUris" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.resourceUris"></a>

```go
ResourceUris interface{}
```

- *Type:* interface{}

resource_uris block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#resource_uris GlueUserDefinedFunction#resource_uris}

---

### GlueUserDefinedFunctionResourceUris <a name="GlueUserDefinedFunctionResourceUris" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueuserdefinedfunction"

&glueuserdefinedfunction.GlueUserDefinedFunctionResourceUris {
	ResourceType: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#resource_type GlueUserDefinedFunction#resource_type}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#uri GlueUserDefinedFunction#uri}. |

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#resource_type GlueUserDefinedFunction#resource_type}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#uri GlueUserDefinedFunction#uri}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueUserDefinedFunctionResourceUrisList <a name="GlueUserDefinedFunctionResourceUrisList" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueuserdefinedfunction"

glueuserdefinedfunction.NewGlueUserDefinedFunctionResourceUrisList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueUserDefinedFunctionResourceUrisList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.get"></a>

```go
func Get(index *f64) GlueUserDefinedFunctionResourceUrisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueUserDefinedFunctionResourceUrisOutputReference <a name="GlueUserDefinedFunctionResourceUrisOutputReference" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueuserdefinedfunction"

glueuserdefinedfunction.NewGlueUserDefinedFunctionResourceUrisOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueUserDefinedFunctionResourceUrisOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



