# `appmeshVirtualGateway` Submodule <a name="`appmeshVirtualGateway` Submodule" id="@cdktf/provider-aws.appmeshVirtualGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshVirtualGateway <a name="AppmeshVirtualGateway" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway aws_appmesh_virtual_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGateway(scope Construct, id *string, config AppmeshVirtualGatewayConfig) AppmeshVirtualGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig">AppmeshVirtualGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig">AppmeshVirtualGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetMeshOwner">ResetMeshOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.putSpec"></a>

```go
func PutSpec(value AppmeshVirtualGatewaySpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetId"></a>

```go
func ResetId()
```

##### `ResetMeshOwner` <a name="ResetMeshOwner" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetMeshOwner"></a>

```go
func ResetMeshOwner()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.AppmeshVirtualGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.AppmeshVirtualGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.AppmeshVirtualGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.createdDate">CreatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.resourceOwner">ResourceOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference">AppmeshVirtualGatewaySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshNameInput">MeshNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshOwnerInput">MeshOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshName">MeshName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshOwner">MeshOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.createdDate"></a>

```go
func CreatedDate() *string
```

- *Type:* *string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.lastUpdatedDate"></a>

```go
func LastUpdatedDate() *string
```

- *Type:* *string

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.resourceOwner"></a>

```go
func ResourceOwner() *string
```

- *Type:* *string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.spec"></a>

```go
func Spec() AppmeshVirtualGatewaySpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference">AppmeshVirtualGatewaySpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MeshNameInput`<sup>Optional</sup> <a name="MeshNameInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshNameInput"></a>

```go
func MeshNameInput() *string
```

- *Type:* *string

---

##### `MeshOwnerInput`<sup>Optional</sup> <a name="MeshOwnerInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshOwnerInput"></a>

```go
func MeshOwnerInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.specInput"></a>

```go
func SpecInput() AppmeshVirtualGatewaySpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MeshName`<sup>Required</sup> <a name="MeshName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshName"></a>

```go
func MeshName() *string
```

- *Type:* *string

---

##### `MeshOwner`<sup>Required</sup> <a name="MeshOwner" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.meshOwner"></a>

```go
func MeshOwner() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshVirtualGatewayConfig <a name="AppmeshVirtualGatewayConfig" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewayConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MeshName: *string,
	Name: *string,
	Spec: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec,
	Id: *string,
	MeshOwner: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.meshName">MeshName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_name AppmeshVirtualGateway#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#name AppmeshVirtualGateway#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#id AppmeshVirtualGateway#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.meshOwner">MeshOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_owner AppmeshVirtualGateway#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags AppmeshVirtualGateway#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags_all AppmeshVirtualGateway#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MeshName`<sup>Required</sup> <a name="MeshName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.meshName"></a>

```go
MeshName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_name AppmeshVirtualGateway#mesh_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#name AppmeshVirtualGateway#name}.

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.spec"></a>

```go
Spec AppmeshVirtualGatewaySpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#spec AppmeshVirtualGateway#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#id AppmeshVirtualGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MeshOwner`<sup>Optional</sup> <a name="MeshOwner" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.meshOwner"></a>

```go
MeshOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mesh_owner AppmeshVirtualGateway#mesh_owner}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags AppmeshVirtualGateway#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewayConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tags_all AppmeshVirtualGateway#tags_all}.

---

### AppmeshVirtualGatewaySpec <a name="AppmeshVirtualGatewaySpec" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpec {
	Listener: interface{},
	BackendDefaults: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults,
	Logging: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.listener">Listener</a></code> | <code>interface{}</code> | listener block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.backendDefaults">BackendDefaults</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a></code> | backend_defaults block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a></code> | logging block. |

---

##### `Listener`<sup>Required</sup> <a name="Listener" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.listener"></a>

```go
Listener interface{}
```

- *Type:* interface{}

listener block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#listener AppmeshVirtualGateway#listener}

---

##### `BackendDefaults`<sup>Optional</sup> <a name="BackendDefaults" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.backendDefaults"></a>

```go
BackendDefaults AppmeshVirtualGatewaySpecBackendDefaults
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a>

backend_defaults block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#backend_defaults AppmeshVirtualGateway#backend_defaults}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec.property.logging"></a>

```go
Logging AppmeshVirtualGatewaySpecLogging
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#logging AppmeshVirtualGateway#logging}

---

### AppmeshVirtualGatewaySpecBackendDefaults <a name="AppmeshVirtualGatewaySpecBackendDefaults" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecBackendDefaults {
	ClientPolicy: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults.property.clientPolicy">ClientPolicy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a></code> | client_policy block. |

---

##### `ClientPolicy`<sup>Optional</sup> <a name="ClientPolicy" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults.property.clientPolicy"></a>

```go
ClientPolicy AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a>

client_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#client_policy AppmeshVirtualGateway#client_policy}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy {
	Tls: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a></code> | tls block. |

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy.property.tls"></a>

```go
Tls AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a>

tls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tls AppmeshVirtualGateway#tls}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls {
	Validation: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation,
	Certificate: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate,
	Enforce: interface{},
	Ports: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.validation">Validation</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a></code> | validation block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.enforce">Enforce</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#enforce AppmeshVirtualGateway#enforce}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.ports">Ports</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#ports AppmeshVirtualGateway#ports}. |

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.validation"></a>

```go
Validation AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a>

validation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#validation AppmeshVirtualGateway#validation}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.certificate"></a>

```go
Certificate AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate AppmeshVirtualGateway#certificate}

---

##### `Enforce`<sup>Optional</sup> <a name="Enforce" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.enforce"></a>

```go
Enforce interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#enforce AppmeshVirtualGateway#enforce}.

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls.property.ports"></a>

```go
Ports *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#ports AppmeshVirtualGateway#ports}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate {
	File: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile,
	Sds: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.property.file">File</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.property.sds">Sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a></code> | sds block. |

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.property.file"></a>

```go
File AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

##### `Sds`<sup>Optional</sup> <a name="Sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate.property.sds"></a>

```go
Sds AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a>

sds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile {
	CertificateChain: *string,
	PrivateKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.property.certificateChain">CertificateChain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#private_key AppmeshVirtualGateway#private_key}. |

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.property.certificateChain"></a>

```go
CertificateChain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#private_key AppmeshVirtualGateway#private_key}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds {
	SecretName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds.property.secretName">SecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}. |

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation {
	Trust: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust,
	SubjectAlternativeNames: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.property.trust">Trust</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a></code> | trust block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a></code> | subject_alternative_names block. |

---

##### `Trust`<sup>Required</sup> <a name="Trust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.property.trust"></a>

```go
Trust AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a>

trust block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#trust AppmeshVirtualGateway#trust}

---

##### `SubjectAlternativeNames`<sup>Optional</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation.property.subjectAlternativeNames"></a>

```go
SubjectAlternativeNames AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a>

subject_alternative_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
	Match: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a></code> | match block. |

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames.property.match"></a>

```go
Match AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#match AppmeshVirtualGateway#match}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
	Exact: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch.property.exact">Exact</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#exact AppmeshVirtualGateway#exact}. |

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch.property.exact"></a>

```go
Exact *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#exact AppmeshVirtualGateway#exact}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust {
	Acm: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm,
	File: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile,
	Sds: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.acm">Acm</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a></code> | acm block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.file">File</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.sds">Sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a></code> | sds block. |

---

##### `Acm`<sup>Optional</sup> <a name="Acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.acm"></a>

```go
Acm AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a>

acm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#acm AppmeshVirtualGateway#acm}

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.file"></a>

```go
File AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

##### `Sds`<sup>Optional</sup> <a name="Sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust.property.sds"></a>

```go
Sds AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a>

sds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
	CertificateAuthorityArns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.property.certificateAuthorityArns">CertificateAuthorityArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_authority_arns AppmeshVirtualGateway#certificate_authority_arns}. |

---

##### `CertificateAuthorityArns`<sup>Required</sup> <a name="CertificateAuthorityArns" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm.property.certificateAuthorityArns"></a>

```go
CertificateAuthorityArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_authority_arns AppmeshVirtualGateway#certificate_authority_arns}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile {
	CertificateChain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.property.certificateChain">CertificateChain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}. |

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile.property.certificateChain"></a>

```go
CertificateChain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}.

---

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds {
	SecretName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds.property.secretName">SecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}. |

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}.

---

### AppmeshVirtualGatewaySpecListener <a name="AppmeshVirtualGatewaySpecListener" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListener {
	PortMapping: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping,
	ConnectionPool: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool,
	HealthCheck: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck,
	Tls: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.portMapping">PortMapping</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a></code> | port_mapping block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.connectionPool">ConnectionPool</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a></code> | connection_pool block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a></code> | tls block. |

---

##### `PortMapping`<sup>Required</sup> <a name="PortMapping" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.portMapping"></a>

```go
PortMapping AppmeshVirtualGatewaySpecListenerPortMapping
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a>

port_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port_mapping AppmeshVirtualGateway#port_mapping}

---

##### `ConnectionPool`<sup>Optional</sup> <a name="ConnectionPool" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.connectionPool"></a>

```go
ConnectionPool AppmeshVirtualGatewaySpecListenerConnectionPool
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a>

connection_pool block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#connection_pool AppmeshVirtualGateway#connection_pool}

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.healthCheck"></a>

```go
HealthCheck AppmeshVirtualGatewaySpecListenerHealthCheck
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#health_check AppmeshVirtualGateway#health_check}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListener.property.tls"></a>

```go
Tls AppmeshVirtualGatewaySpecListenerTls
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a>

tls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#tls AppmeshVirtualGateway#tls}

---

### AppmeshVirtualGatewaySpecListenerConnectionPool <a name="AppmeshVirtualGatewaySpecListenerConnectionPool" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerConnectionPool {
	Grpc: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc,
	Http: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp,
	Http2: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a></code> | grpc block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.http">Http</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a></code> | http block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.http2">Http2</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a></code> | http2 block. |

---

##### `Grpc`<sup>Optional</sup> <a name="Grpc" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.grpc"></a>

```go
Grpc AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#grpc AppmeshVirtualGateway#grpc}

---

##### `Http`<sup>Optional</sup> <a name="Http" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.http"></a>

```go
Http AppmeshVirtualGatewaySpecListenerConnectionPoolHttp
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a>

http block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#http AppmeshVirtualGateway#http}

---

##### `Http2`<sup>Optional</sup> <a name="Http2" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool.property.http2"></a>

```go
Http2 AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a>

http2 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#http2 AppmeshVirtualGateway#http2}

---

### AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc {
	MaxRequests: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc.property.maxRequests">MaxRequests</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_requests AppmeshVirtualGateway#max_requests}. |

---

##### `MaxRequests`<sup>Required</sup> <a name="MaxRequests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc.property.maxRequests"></a>

```go
MaxRequests *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_requests AppmeshVirtualGateway#max_requests}.

---

### AppmeshVirtualGatewaySpecListenerConnectionPoolHttp <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolHttp" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp {
	MaxConnections: *f64,
	MaxPendingRequests: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_connections AppmeshVirtualGateway#max_connections}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_pending_requests AppmeshVirtualGateway#max_pending_requests}. |

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp.property.maxConnections"></a>

```go
MaxConnections *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_connections AppmeshVirtualGateway#max_connections}.

---

##### `MaxPendingRequests`<sup>Optional</sup> <a name="MaxPendingRequests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp.property.maxPendingRequests"></a>

```go
MaxPendingRequests *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_pending_requests AppmeshVirtualGateway#max_pending_requests}.

---

### AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 {
	MaxRequests: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2.property.maxRequests">MaxRequests</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_requests AppmeshVirtualGateway#max_requests}. |

---

##### `MaxRequests`<sup>Required</sup> <a name="MaxRequests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2.property.maxRequests"></a>

```go
MaxRequests *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#max_requests AppmeshVirtualGateway#max_requests}.

---

### AppmeshVirtualGatewaySpecListenerHealthCheck <a name="AppmeshVirtualGatewaySpecListenerHealthCheck" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerHealthCheck {
	HealthyThreshold: *f64,
	IntervalMillis: *f64,
	Protocol: *string,
	TimeoutMillis: *f64,
	UnhealthyThreshold: *f64,
	Path: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#healthy_threshold AppmeshVirtualGateway#healthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.intervalMillis">IntervalMillis</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#interval_millis AppmeshVirtualGateway#interval_millis}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#protocol AppmeshVirtualGateway#protocol}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.timeoutMillis">TimeoutMillis</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#timeout_millis AppmeshVirtualGateway#timeout_millis}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#unhealthy_threshold AppmeshVirtualGateway#unhealthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#path AppmeshVirtualGateway#path}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port AppmeshVirtualGateway#port}. |

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.healthyThreshold"></a>

```go
HealthyThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#healthy_threshold AppmeshVirtualGateway#healthy_threshold}.

---

##### `IntervalMillis`<sup>Required</sup> <a name="IntervalMillis" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.intervalMillis"></a>

```go
IntervalMillis *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#interval_millis AppmeshVirtualGateway#interval_millis}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#protocol AppmeshVirtualGateway#protocol}.

---

##### `TimeoutMillis`<sup>Required</sup> <a name="TimeoutMillis" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.timeoutMillis"></a>

```go
TimeoutMillis *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#timeout_millis AppmeshVirtualGateway#timeout_millis}.

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.unhealthyThreshold"></a>

```go
UnhealthyThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#unhealthy_threshold AppmeshVirtualGateway#unhealthy_threshold}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#path AppmeshVirtualGateway#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port AppmeshVirtualGateway#port}.

---

### AppmeshVirtualGatewaySpecListenerPortMapping <a name="AppmeshVirtualGatewaySpecListenerPortMapping" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerPortMapping {
	Port: *f64,
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port AppmeshVirtualGateway#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#protocol AppmeshVirtualGateway#protocol}. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#port AppmeshVirtualGateway#port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#protocol AppmeshVirtualGateway#protocol}.

---

### AppmeshVirtualGatewaySpecListenerTls <a name="AppmeshVirtualGatewaySpecListenerTls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerTls {
	Certificate: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate,
	Mode: *string,
	Validation: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mode AppmeshVirtualGateway#mode}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.validation">Validation</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a></code> | validation block. |

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.certificate"></a>

```go
Certificate AppmeshVirtualGatewaySpecListenerTlsCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate AppmeshVirtualGateway#certificate}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#mode AppmeshVirtualGateway#mode}.

---

##### `Validation`<sup>Optional</sup> <a name="Validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls.property.validation"></a>

```go
Validation AppmeshVirtualGatewaySpecListenerTlsValidation
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a>

validation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#validation AppmeshVirtualGateway#validation}

---

### AppmeshVirtualGatewaySpecListenerTlsCertificate <a name="AppmeshVirtualGatewaySpecListenerTlsCertificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerTlsCertificate {
	Acm: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm,
	File: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile,
	Sds: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.acm">Acm</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a></code> | acm block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.file">File</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.sds">Sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a></code> | sds block. |

---

##### `Acm`<sup>Optional</sup> <a name="Acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.acm"></a>

```go
Acm AppmeshVirtualGatewaySpecListenerTlsCertificateAcm
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a>

acm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#acm AppmeshVirtualGateway#acm}

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.file"></a>

```go
File AppmeshVirtualGatewaySpecListenerTlsCertificateFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

##### `Sds`<sup>Optional</sup> <a name="Sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate.property.sds"></a>

```go
Sds AppmeshVirtualGatewaySpecListenerTlsCertificateSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a>

sds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}

---

### AppmeshVirtualGatewaySpecListenerTlsCertificateAcm <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateAcm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm {
	CertificateArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_arn AppmeshVirtualGateway#certificate_arn}. |

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_arn AppmeshVirtualGateway#certificate_arn}.

---

### AppmeshVirtualGatewaySpecListenerTlsCertificateFile <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile {
	CertificateChain: *string,
	PrivateKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile.property.certificateChain">CertificateChain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#private_key AppmeshVirtualGateway#private_key}. |

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile.property.certificateChain"></a>

```go
CertificateChain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#private_key AppmeshVirtualGateway#private_key}.

---

### AppmeshVirtualGatewaySpecListenerTlsCertificateSds <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds {
	SecretName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds.property.secretName">SecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}. |

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}.

---

### AppmeshVirtualGatewaySpecListenerTlsValidation <a name="AppmeshVirtualGatewaySpecListenerTlsValidation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerTlsValidation {
	Trust: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust,
	SubjectAlternativeNames: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation.property.trust">Trust</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a></code> | trust block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a></code> | subject_alternative_names block. |

---

##### `Trust`<sup>Required</sup> <a name="Trust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation.property.trust"></a>

```go
Trust AppmeshVirtualGatewaySpecListenerTlsValidationTrust
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a>

trust block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#trust AppmeshVirtualGateway#trust}

---

##### `SubjectAlternativeNames`<sup>Optional</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation.property.subjectAlternativeNames"></a>

```go
SubjectAlternativeNames AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a>

subject_alternative_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}

---

### AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames <a name="AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames {
	Match: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a></code> | match block. |

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames.property.match"></a>

```go
Match AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#match AppmeshVirtualGateway#match}

---

### AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch <a name="AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch {
	Exact: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch.property.exact">Exact</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#exact AppmeshVirtualGateway#exact}. |

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch.property.exact"></a>

```go
Exact *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#exact AppmeshVirtualGateway#exact}.

---

### AppmeshVirtualGatewaySpecListenerTlsValidationTrust <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust {
	File: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile,
	Sds: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust.property.file">File</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust.property.sds">Sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a></code> | sds block. |

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust.property.file"></a>

```go
File AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

##### `Sds`<sup>Optional</sup> <a name="Sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust.property.sds"></a>

```go
Sds AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a>

sds block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#sds AppmeshVirtualGateway#sds}

---

### AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile {
	CertificateChain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile.property.certificateChain">CertificateChain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}. |

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile.property.certificateChain"></a>

```go
CertificateChain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#certificate_chain AppmeshVirtualGateway#certificate_chain}.

---

### AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds {
	SecretName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds.property.secretName">SecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}. |

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#secret_name AppmeshVirtualGateway#secret_name}.

---

### AppmeshVirtualGatewaySpecLogging <a name="AppmeshVirtualGatewaySpecLogging" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecLogging {
	AccessLog: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging.property.accessLog">AccessLog</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a></code> | access_log block. |

---

##### `AccessLog`<sup>Optional</sup> <a name="AccessLog" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging.property.accessLog"></a>

```go
AccessLog AppmeshVirtualGatewaySpecLoggingAccessLog
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a>

access_log block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#access_log AppmeshVirtualGateway#access_log}

---

### AppmeshVirtualGatewaySpecLoggingAccessLog <a name="AppmeshVirtualGatewaySpecLoggingAccessLog" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecLoggingAccessLog {
	File: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog.property.file">File</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a></code> | file block. |

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog.property.file"></a>

```go
File AppmeshVirtualGatewaySpecLoggingAccessLogFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a>

file block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#file AppmeshVirtualGateway#file}

---

### AppmeshVirtualGatewaySpecLoggingAccessLogFile <a name="AppmeshVirtualGatewaySpecLoggingAccessLogFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

&appmeshvirtualgateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#path AppmeshVirtualGateway#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway#path AppmeshVirtualGateway#path}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTls` <a name="PutTls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.putTls"></a>

```go
func PutTls(value AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a>

---

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.resetTls"></a>

```go
func ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.tlsInput">TlsInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.tls"></a>

```go
func Tls() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference</a>

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.tlsInput"></a>

```go
func TlsInput() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.certificateChainInput">CertificateChainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.certificateChain">CertificateChain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateChainInput`<sup>Optional</sup> <a name="CertificateChainInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.certificateChainInput"></a>

```go
func CertificateChainInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.certificateChain"></a>

```go
func CertificateChain() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putSds">PutSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resetSds">ResetSds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFile` <a name="PutFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putFile"></a>

```go
func PutFile(value AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a>

---

##### `PutSds` <a name="PutSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putSds"></a>

```go
func PutSds(value AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.putSds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a>

---

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resetFile"></a>

```go
func ResetFile()
```

##### `ResetSds` <a name="ResetSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.resetSds"></a>

```go
func ResetSds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.sds">Sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.fileInput">FileInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.sdsInput">SdsInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.file"></a>

```go
func File() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference</a>

---

##### `Sds`<sup>Required</sup> <a name="Sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.sds"></a>

```go
func Sds() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.fileInput"></a>

```go
func FileInput() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile</a>

---

##### `SdsInput`<sup>Optional</sup> <a name="SdsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.sdsInput"></a>

```go
func SdsInput() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putCertificate">PutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putValidation">PutValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetEnforce">ResetEnforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putCertificate"></a>

```go
func PutCertificate(value AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a>

---

##### `PutValidation` <a name="PutValidation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putValidation"></a>

```go
func PutValidation(value AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.putValidation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a>

---

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetEnforce` <a name="ResetEnforce" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetEnforce"></a>

```go
func ResetEnforce()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.resetPorts"></a>

```go
func ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.validation">Validation</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.certificateInput">CertificateInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.enforceInput">EnforceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.portsInput">PortsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.validationInput">ValidationInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.enforce">Enforce</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.ports">Ports</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.certificate"></a>

```go
func Certificate() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference</a>

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.validation"></a>

```go
func Validation() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.certificateInput"></a>

```go
func CertificateInput() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate</a>

---

##### `EnforceInput`<sup>Optional</sup> <a name="EnforceInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.enforceInput"></a>

```go
func EnforceInput() interface{}
```

- *Type:* interface{}

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.portsInput"></a>

```go
func PortsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `ValidationInput`<sup>Optional</sup> <a name="ValidationInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.validationInput"></a>

```go
func ValidationInput() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a>

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.enforce"></a>

```go
func Enforce() interface{}
```

- *Type:* interface{}

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.ports"></a>

```go
func Ports() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putSubjectAlternativeNames">PutSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putTrust">PutTrust</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resetSubjectAlternativeNames">ResetSubjectAlternativeNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubjectAlternativeNames` <a name="PutSubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putSubjectAlternativeNames"></a>

```go
func PutSubjectAlternativeNames(value AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putSubjectAlternativeNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a>

---

##### `PutTrust` <a name="PutTrust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putTrust"></a>

```go
func PutTrust(value AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.putTrust.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a>

---

##### `ResetSubjectAlternativeNames` <a name="ResetSubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.resetSubjectAlternativeNames"></a>

```go
func ResetSubjectAlternativeNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.trust">Trust</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.subjectAlternativeNamesInput">SubjectAlternativeNamesInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.trustInput">TrustInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.subjectAlternativeNames"></a>

```go
func SubjectAlternativeNames() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference</a>

---

##### `Trust`<sup>Required</sup> <a name="Trust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.trust"></a>

```go
func Trust() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference</a>

---

##### `SubjectAlternativeNamesInput`<sup>Optional</sup> <a name="SubjectAlternativeNamesInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.subjectAlternativeNamesInput"></a>

```go
func SubjectAlternativeNamesInput() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a>

---

##### `TrustInput`<sup>Optional</sup> <a name="TrustInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.trustInput"></a>

```go
func TrustInput() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exactInput">ExactInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact">Exact</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exactInput"></a>

```go
func ExactInput() *[]*string
```

- *Type:* *[]*string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact"></a>

```go
func Exact() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.putMatch">PutMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.putMatch"></a>

```go
func PutMatch(value AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.match"></a>

```go
func Match() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference</a>

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.matchInput"></a>

```go
func MatchInput() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.certificateAuthorityArnsInput">CertificateAuthorityArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.certificateAuthorityArns">CertificateAuthorityArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateAuthorityArnsInput`<sup>Optional</sup> <a name="CertificateAuthorityArnsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.certificateAuthorityArnsInput"></a>

```go
func CertificateAuthorityArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CertificateAuthorityArns`<sup>Required</sup> <a name="CertificateAuthorityArns" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.certificateAuthorityArns"></a>

```go
func CertificateAuthorityArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.certificateChainInput">CertificateChainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.certificateChain">CertificateChain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateChainInput`<sup>Optional</sup> <a name="CertificateChainInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.certificateChainInput"></a>

```go
func CertificateChainInput() *string
```

- *Type:* *string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.certificateChain"></a>

```go
func CertificateChain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putAcm">PutAcm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putSds">PutSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetAcm">ResetAcm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetSds">ResetSds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcm` <a name="PutAcm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putAcm"></a>

```go
func PutAcm(value AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putAcm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a>

---

##### `PutFile` <a name="PutFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putFile"></a>

```go
func PutFile(value AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a>

---

##### `PutSds` <a name="PutSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putSds"></a>

```go
func PutSds(value AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.putSds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a>

---

##### `ResetAcm` <a name="ResetAcm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetAcm"></a>

```go
func ResetAcm()
```

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetFile"></a>

```go
func ResetFile()
```

##### `ResetSds` <a name="ResetSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.resetSds"></a>

```go
func ResetSds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.acm">Acm</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.sds">Sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.acmInput">AcmInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.fileInput">FileInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.sdsInput">SdsInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Acm`<sup>Required</sup> <a name="Acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.acm"></a>

```go
func Acm() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference</a>

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.file"></a>

```go
func File() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference</a>

---

##### `Sds`<sup>Required</sup> <a name="Sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.sds"></a>

```go
func Sds() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference</a>

---

##### `AcmInput`<sup>Optional</sup> <a name="AcmInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.acmInput"></a>

```go
func AcmInput() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.fileInput"></a>

```go
func FileInput() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile</a>

---

##### `SdsInput`<sup>Optional</sup> <a name="SdsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.sdsInput"></a>

```go
func SdsInput() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds</a>

---


### AppmeshVirtualGatewaySpecBackendDefaultsOutputReference <a name="AppmeshVirtualGatewaySpecBackendDefaultsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecBackendDefaultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecBackendDefaultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.putClientPolicy">PutClientPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resetClientPolicy">ResetClientPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientPolicy` <a name="PutClientPolicy" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.putClientPolicy"></a>

```go
func PutClientPolicy(value AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.putClientPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a>

---

##### `ResetClientPolicy` <a name="ResetClientPolicy" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.resetClientPolicy"></a>

```go
func ResetClientPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.clientPolicy">ClientPolicy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.clientPolicyInput">ClientPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientPolicy`<sup>Required</sup> <a name="ClientPolicy" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.clientPolicy"></a>

```go
func ClientPolicy() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference</a>

---

##### `ClientPolicyInput`<sup>Optional</sup> <a name="ClientPolicyInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.clientPolicyInput"></a>

```go
func ClientPolicyInput() AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy">AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecBackendDefaults
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a>

---


### AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.maxRequestsInput">MaxRequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.maxRequests">MaxRequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxRequestsInput`<sup>Optional</sup> <a name="MaxRequestsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.maxRequestsInput"></a>

```go
func MaxRequestsInput() *f64
```

- *Type:* *f64

---

##### `MaxRequests`<sup>Required</sup> <a name="MaxRequests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.maxRequests"></a>

```go
func MaxRequests() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a>

---


### AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.maxRequestsInput">MaxRequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.maxRequests">MaxRequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxRequestsInput`<sup>Optional</sup> <a name="MaxRequestsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.maxRequestsInput"></a>

```go
func MaxRequestsInput() *f64
```

- *Type:* *f64

---

##### `MaxRequests`<sup>Required</sup> <a name="MaxRequests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.maxRequests"></a>

```go
func MaxRequests() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a>

---


### AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resetMaxPendingRequests">ResetMaxPendingRequests</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxPendingRequests` <a name="ResetMaxPendingRequests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.resetMaxPendingRequests"></a>

```go
func ResetMaxPendingRequests()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxConnectionsInput">MaxConnectionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxPendingRequestsInput">MaxPendingRequestsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxConnections">MaxConnections</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxConnectionsInput`<sup>Optional</sup> <a name="MaxConnectionsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxConnectionsInput"></a>

```go
func MaxConnectionsInput() *f64
```

- *Type:* *f64

---

##### `MaxPendingRequestsInput`<sup>Optional</sup> <a name="MaxPendingRequestsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxPendingRequestsInput"></a>

```go
func MaxPendingRequestsInput() *f64
```

- *Type:* *f64

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxConnections"></a>

```go
func MaxConnections() *f64
```

- *Type:* *f64

---

##### `MaxPendingRequests`<sup>Required</sup> <a name="MaxPendingRequests" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.maxPendingRequests"></a>

```go
func MaxPendingRequests() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerConnectionPoolHttp
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a>

---


### AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference <a name="AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putGrpc">PutGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp">PutHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp2">PutHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetGrpc">ResetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetHttp">ResetHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetHttp2">ResetHttp2</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrpc` <a name="PutGrpc" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putGrpc"></a>

```go
func PutGrpc(value AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a>

---

##### `PutHttp` <a name="PutHttp" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp"></a>

```go
func PutHttp(value AppmeshVirtualGatewaySpecListenerConnectionPoolHttp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a>

---

##### `PutHttp2` <a name="PutHttp2" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp2"></a>

```go
func PutHttp2(value AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.putHttp2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a>

---

##### `ResetGrpc` <a name="ResetGrpc" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetGrpc"></a>

```go
func ResetGrpc()
```

##### `ResetHttp` <a name="ResetHttp" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetHttp"></a>

```go
func ResetHttp()
```

##### `ResetHttp2` <a name="ResetHttp2" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.resetHttp2"></a>

```go
func ResetHttp2()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http">Http</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http2">Http2</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.grpcInput">GrpcInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http2Input">Http2Input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.httpInput">HttpInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Grpc`<sup>Required</sup> <a name="Grpc" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.grpc"></a>

```go
func Grpc() AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference</a>

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http"></a>

```go
func Http() AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference</a>

---

##### `Http2`<sup>Required</sup> <a name="Http2" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http2"></a>

```go
func Http2() AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference</a>

---

##### `GrpcInput`<sup>Optional</sup> <a name="GrpcInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.grpcInput"></a>

```go
func GrpcInput() AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc">AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc</a>

---

##### `Http2Input`<sup>Optional</sup> <a name="Http2Input" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.http2Input"></a>

```go
func Http2Input() AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2</a>

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.httpInput"></a>

```go
func HttpInput() AppmeshVirtualGatewaySpecListenerConnectionPoolHttp
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolHttp">AppmeshVirtualGatewaySpecListenerConnectionPoolHttp</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerConnectionPool
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a>

---


### AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference <a name="AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.intervalMillisInput">IntervalMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.timeoutMillisInput">TimeoutMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.intervalMillis">IntervalMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.timeoutMillis">TimeoutMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.healthyThresholdInput"></a>

```go
func HealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `IntervalMillisInput`<sup>Optional</sup> <a name="IntervalMillisInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.intervalMillisInput"></a>

```go
func IntervalMillisInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `TimeoutMillisInput`<sup>Optional</sup> <a name="TimeoutMillisInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.timeoutMillisInput"></a>

```go
func TimeoutMillisInput() *f64
```

- *Type:* *f64

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```go
func UnhealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.healthyThreshold"></a>

```go
func HealthyThreshold() *f64
```

- *Type:* *f64

---

##### `IntervalMillis`<sup>Required</sup> <a name="IntervalMillis" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.intervalMillis"></a>

```go
func IntervalMillis() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `TimeoutMillis`<sup>Required</sup> <a name="TimeoutMillis" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.timeoutMillis"></a>

```go
func TimeoutMillis() *f64
```

- *Type:* *f64

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.unhealthyThreshold"></a>

```go
func UnhealthyThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerHealthCheck
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a>

---


### AppmeshVirtualGatewaySpecListenerList <a name="AppmeshVirtualGatewaySpecListenerList" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppmeshVirtualGatewaySpecListenerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.get"></a>

```go
func Get(index *f64) AppmeshVirtualGatewaySpecListenerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppmeshVirtualGatewaySpecListenerOutputReference <a name="AppmeshVirtualGatewaySpecListenerOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppmeshVirtualGatewaySpecListenerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putConnectionPool">PutConnectionPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putPortMapping">PutPortMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetConnectionPool">ResetConnectionPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnectionPool` <a name="PutConnectionPool" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putConnectionPool"></a>

```go
func PutConnectionPool(value AppmeshVirtualGatewaySpecListenerConnectionPool)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putConnectionPool.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a>

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putHealthCheck"></a>

```go
func PutHealthCheck(value AppmeshVirtualGatewaySpecListenerHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a>

---

##### `PutPortMapping` <a name="PutPortMapping" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putPortMapping"></a>

```go
func PutPortMapping(value AppmeshVirtualGatewaySpecListenerPortMapping)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putPortMapping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a>

---

##### `PutTls` <a name="PutTls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putTls"></a>

```go
func PutTls(value AppmeshVirtualGatewaySpecListenerTls)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a>

---

##### `ResetConnectionPool` <a name="ResetConnectionPool" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetConnectionPool"></a>

```go
func ResetConnectionPool()
```

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetHealthCheck"></a>

```go
func ResetHealthCheck()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.resetTls"></a>

```go
func ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.connectionPool">ConnectionPool</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference">AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.portMapping">PortMapping</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference">AppmeshVirtualGatewaySpecListenerPortMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference">AppmeshVirtualGatewaySpecListenerTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.connectionPoolInput">ConnectionPoolInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.healthCheckInput">HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.portMappingInput">PortMappingInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.tlsInput">TlsInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionPool`<sup>Required</sup> <a name="ConnectionPool" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.connectionPool"></a>

```go
func ConnectionPool() AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference">AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference</a>

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.healthCheck"></a>

```go
func HealthCheck() AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference">AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference</a>

---

##### `PortMapping`<sup>Required</sup> <a name="PortMapping" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.portMapping"></a>

```go
func PortMapping() AppmeshVirtualGatewaySpecListenerPortMappingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference">AppmeshVirtualGatewaySpecListenerPortMappingOutputReference</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.tls"></a>

```go
func Tls() AppmeshVirtualGatewaySpecListenerTlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference">AppmeshVirtualGatewaySpecListenerTlsOutputReference</a>

---

##### `ConnectionPoolInput`<sup>Optional</sup> <a name="ConnectionPoolInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.connectionPoolInput"></a>

```go
func ConnectionPoolInput() AppmeshVirtualGatewaySpecListenerConnectionPool
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerConnectionPool">AppmeshVirtualGatewaySpecListenerConnectionPool</a>

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.healthCheckInput"></a>

```go
func HealthCheckInput() AppmeshVirtualGatewaySpecListenerHealthCheck
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerHealthCheck">AppmeshVirtualGatewaySpecListenerHealthCheck</a>

---

##### `PortMappingInput`<sup>Optional</sup> <a name="PortMappingInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.portMappingInput"></a>

```go
func PortMappingInput() AppmeshVirtualGatewaySpecListenerPortMapping
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a>

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.tlsInput"></a>

```go
func TlsInput() AppmeshVirtualGatewaySpecListenerTls
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppmeshVirtualGatewaySpecListenerPortMappingOutputReference <a name="AppmeshVirtualGatewaySpecListenerPortMappingOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerPortMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerPortMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerPortMapping
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerPortMapping">AppmeshVirtualGatewaySpecListenerPortMapping</a>

---


### AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerTlsCertificateAcm
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a>

---


### AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.certificateChainInput">CertificateChainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.certificateChain">CertificateChain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateChainInput`<sup>Optional</sup> <a name="CertificateChainInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.certificateChainInput"></a>

```go
func CertificateChainInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.certificateChain"></a>

```go
func CertificateChain() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerTlsCertificateFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a>

---


### AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putAcm">PutAcm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putSds">PutSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetAcm">ResetAcm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetSds">ResetSds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcm` <a name="PutAcm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putAcm"></a>

```go
func PutAcm(value AppmeshVirtualGatewaySpecListenerTlsCertificateAcm)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putAcm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a>

---

##### `PutFile` <a name="PutFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putFile"></a>

```go
func PutFile(value AppmeshVirtualGatewaySpecListenerTlsCertificateFile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a>

---

##### `PutSds` <a name="PutSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putSds"></a>

```go
func PutSds(value AppmeshVirtualGatewaySpecListenerTlsCertificateSds)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.putSds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a>

---

##### `ResetAcm` <a name="ResetAcm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetAcm"></a>

```go
func ResetAcm()
```

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetFile"></a>

```go
func ResetFile()
```

##### `ResetSds` <a name="ResetSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.resetSds"></a>

```go
func ResetSds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.acm">Acm</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.sds">Sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.acmInput">AcmInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.fileInput">FileInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.sdsInput">SdsInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Acm`<sup>Required</sup> <a name="Acm" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.acm"></a>

```go
func Acm() AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference</a>

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.file"></a>

```go
func File() AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference</a>

---

##### `Sds`<sup>Required</sup> <a name="Sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.sds"></a>

```go
func Sds() AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference</a>

---

##### `AcmInput`<sup>Optional</sup> <a name="AcmInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.acmInput"></a>

```go
func AcmInput() AppmeshVirtualGatewaySpecListenerTlsCertificateAcm
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateAcm">AppmeshVirtualGatewaySpecListenerTlsCertificateAcm</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.fileInput"></a>

```go
func FileInput() AppmeshVirtualGatewaySpecListenerTlsCertificateFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateFile">AppmeshVirtualGatewaySpecListenerTlsCertificateFile</a>

---

##### `SdsInput`<sup>Optional</sup> <a name="SdsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.sdsInput"></a>

```go
func SdsInput() AppmeshVirtualGatewaySpecListenerTlsCertificateSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerTlsCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a>

---


### AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerTlsCertificateSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateSds">AppmeshVirtualGatewaySpecListenerTlsCertificateSds</a>

---


### AppmeshVirtualGatewaySpecListenerTlsOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerTlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerTlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putCertificate">PutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putValidation">PutValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.resetValidation">ResetValidation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putCertificate"></a>

```go
func PutCertificate(value AppmeshVirtualGatewaySpecListenerTlsCertificate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a>

---

##### `PutValidation` <a name="PutValidation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putValidation"></a>

```go
func PutValidation(value AppmeshVirtualGatewaySpecListenerTlsValidation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.putValidation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a>

---

##### `ResetValidation` <a name="ResetValidation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.resetValidation"></a>

```go
func ResetValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.validation">Validation</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.certificateInput">CertificateInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.validationInput">ValidationInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.certificate"></a>

```go
func Certificate() AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference">AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference</a>

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.validation"></a>

```go
func Validation() AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.certificateInput"></a>

```go
func CertificateInput() AppmeshVirtualGatewaySpecListenerTlsCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsCertificate">AppmeshVirtualGatewaySpecListenerTlsCertificate</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ValidationInput`<sup>Optional</sup> <a name="ValidationInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.validationInput"></a>

```go
func ValidationInput() AppmeshVirtualGatewaySpecListenerTlsValidation
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerTls
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTls">AppmeshVirtualGatewaySpecListenerTls</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerTlsValidationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putSubjectAlternativeNames">PutSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putTrust">PutTrust</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resetSubjectAlternativeNames">ResetSubjectAlternativeNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubjectAlternativeNames` <a name="PutSubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putSubjectAlternativeNames"></a>

```go
func PutSubjectAlternativeNames(value AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putSubjectAlternativeNames.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a>

---

##### `PutTrust` <a name="PutTrust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putTrust"></a>

```go
func PutTrust(value AppmeshVirtualGatewaySpecListenerTlsValidationTrust)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.putTrust.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a>

---

##### `ResetSubjectAlternativeNames` <a name="ResetSubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.resetSubjectAlternativeNames"></a>

```go
func ResetSubjectAlternativeNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.trust">Trust</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.subjectAlternativeNamesInput">SubjectAlternativeNamesInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.trustInput">TrustInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.subjectAlternativeNames"></a>

```go
func SubjectAlternativeNames() AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference</a>

---

##### `Trust`<sup>Required</sup> <a name="Trust" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.trust"></a>

```go
func Trust() AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference</a>

---

##### `SubjectAlternativeNamesInput`<sup>Optional</sup> <a name="SubjectAlternativeNamesInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.subjectAlternativeNamesInput"></a>

```go
func SubjectAlternativeNamesInput() AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a>

---

##### `TrustInput`<sup>Optional</sup> <a name="TrustInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.trustInput"></a>

```go
func TrustInput() AppmeshVirtualGatewaySpecListenerTlsValidationTrust
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerTlsValidation
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidation">AppmeshVirtualGatewaySpecListenerTlsValidation</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exactInput">ExactInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact">Exact</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exactInput"></a>

```go
func ExactInput() *[]*string
```

- *Type:* *[]*string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.exact"></a>

```go
func Exact() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.putMatch">PutMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.putMatch"></a>

```go
func PutMatch(value AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.match"></a>

```go
func Match() AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference</a>

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.matchInput"></a>

```go
func MatchInput() AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames">AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.certificateChainInput">CertificateChainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.certificateChain">CertificateChain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateChainInput`<sup>Optional</sup> <a name="CertificateChainInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.certificateChainInput"></a>

```go
func CertificateChainInput() *string
```

- *Type:* *string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.certificateChain"></a>

```go
func CertificateChain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putSds">PutSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resetSds">ResetSds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFile` <a name="PutFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putFile"></a>

```go
func PutFile(value AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a>

---

##### `PutSds` <a name="PutSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putSds"></a>

```go
func PutSds(value AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.putSds.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a>

---

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resetFile"></a>

```go
func ResetFile()
```

##### `ResetSds` <a name="ResetSds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.resetSds"></a>

```go
func ResetSds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.sds">Sds</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.fileInput">FileInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.sdsInput">SdsInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.file"></a>

```go
func File() AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference</a>

---

##### `Sds`<sup>Required</sup> <a name="Sds" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.sds"></a>

```go
func Sds() AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.fileInput"></a>

```go
func FileInput() AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile">AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile</a>

---

##### `SdsInput`<sup>Optional</sup> <a name="SdsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.sdsInput"></a>

```go
func SdsInput() AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerTlsValidationTrust
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrust">AppmeshVirtualGatewaySpecListenerTlsValidationTrust</a>

---


### AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference <a name="AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds">AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds</a>

---


### AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference <a name="AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecLoggingAccessLogFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a>

---


### AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference <a name="AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecLoggingAccessLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resetFile">ResetFile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFile` <a name="PutFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.putFile"></a>

```go
func PutFile(value AppmeshVirtualGatewaySpecLoggingAccessLogFile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a>

---

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.resetFile"></a>

```go
func ResetFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference">AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.fileInput">FileInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.file"></a>

```go
func File() AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference">AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.fileInput"></a>

```go
func FileInput() AppmeshVirtualGatewaySpecLoggingAccessLogFile
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogFile">AppmeshVirtualGatewaySpecLoggingAccessLogFile</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecLoggingAccessLog
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a>

---


### AppmeshVirtualGatewaySpecLoggingOutputReference <a name="AppmeshVirtualGatewaySpecLoggingOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.putAccessLog">PutAccessLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.resetAccessLog">ResetAccessLog</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessLog` <a name="PutAccessLog" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.putAccessLog"></a>

```go
func PutAccessLog(value AppmeshVirtualGatewaySpecLoggingAccessLog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.putAccessLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a>

---

##### `ResetAccessLog` <a name="ResetAccessLog" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.resetAccessLog"></a>

```go
func ResetAccessLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.accessLog">AccessLog</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference">AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.accessLogInput">AccessLogInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLog`<sup>Required</sup> <a name="AccessLog" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.accessLog"></a>

```go
func AccessLog() AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference">AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference</a>

---

##### `AccessLogInput`<sup>Optional</sup> <a name="AccessLogInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.accessLogInput"></a>

```go
func AccessLogInput() AppmeshVirtualGatewaySpecLoggingAccessLog
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingAccessLog">AppmeshVirtualGatewaySpecLoggingAccessLog</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpecLogging
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a>

---


### AppmeshVirtualGatewaySpecOutputReference <a name="AppmeshVirtualGatewaySpecOutputReference" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualgateway"

appmeshvirtualgateway.NewAppmeshVirtualGatewaySpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualGatewaySpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putBackendDefaults">PutBackendDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putListener">PutListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resetBackendDefaults">ResetBackendDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resetLogging">ResetLogging</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackendDefaults` <a name="PutBackendDefaults" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putBackendDefaults"></a>

```go
func PutBackendDefaults(value AppmeshVirtualGatewaySpecBackendDefaults)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putBackendDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a>

---

##### `PutListener` <a name="PutListener" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putListener"></a>

```go
func PutListener(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putListener.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putLogging"></a>

```go
func PutLogging(value AppmeshVirtualGatewaySpecLogging)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a>

---

##### `ResetBackendDefaults` <a name="ResetBackendDefaults" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resetBackendDefaults"></a>

```go
func ResetBackendDefaults()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.resetLogging"></a>

```go
func ResetLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.backendDefaults">BackendDefaults</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.listener">Listener</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList">AppmeshVirtualGatewaySpecListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference">AppmeshVirtualGatewaySpecLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.backendDefaultsInput">BackendDefaultsInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.listenerInput">ListenerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendDefaults`<sup>Required</sup> <a name="BackendDefaults" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.backendDefaults"></a>

```go
func BackendDefaults() AppmeshVirtualGatewaySpecBackendDefaultsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaultsOutputReference">AppmeshVirtualGatewaySpecBackendDefaultsOutputReference</a>

---

##### `Listener`<sup>Required</sup> <a name="Listener" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.listener"></a>

```go
func Listener() AppmeshVirtualGatewaySpecListenerList
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecListenerList">AppmeshVirtualGatewaySpecListenerList</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.logging"></a>

```go
func Logging() AppmeshVirtualGatewaySpecLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLoggingOutputReference">AppmeshVirtualGatewaySpecLoggingOutputReference</a>

---

##### `BackendDefaultsInput`<sup>Optional</sup> <a name="BackendDefaultsInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.backendDefaultsInput"></a>

```go
func BackendDefaultsInput() AppmeshVirtualGatewaySpecBackendDefaults
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecBackendDefaults">AppmeshVirtualGatewaySpecBackendDefaults</a>

---

##### `ListenerInput`<sup>Optional</sup> <a name="ListenerInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.listenerInput"></a>

```go
func ListenerInput() interface{}
```

- *Type:* interface{}

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.loggingInput"></a>

```go
func LoggingInput() AppmeshVirtualGatewaySpecLogging
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecLogging">AppmeshVirtualGatewaySpecLogging</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpecOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualGatewaySpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualGateway.AppmeshVirtualGatewaySpec">AppmeshVirtualGatewaySpec</a>

---



