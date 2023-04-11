# `appmeshVirtualRouter` Submodule <a name="`appmeshVirtualRouter` Submodule" id="@cdktf/provider-aws.appmeshVirtualRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshVirtualRouter <a name="AppmeshVirtualRouter" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router aws_appmesh_virtual_router}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualrouter"

appmeshvirtualrouter.NewAppmeshVirtualRouter(scope Construct, id *string, config AppmeshVirtualRouterConfig) AppmeshVirtualRouter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig">AppmeshVirtualRouterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig">AppmeshVirtualRouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetMeshOwner">ResetMeshOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.putSpec"></a>

```go
func PutSpec(value AppmeshVirtualRouterSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetId"></a>

```go
func ResetId()
```

##### `ResetMeshOwner` <a name="ResetMeshOwner" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetMeshOwner"></a>

```go
func ResetMeshOwner()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualrouter"

appmeshvirtualrouter.AppmeshVirtualRouter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualrouter"

appmeshvirtualrouter.AppmeshVirtualRouter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualrouter"

appmeshvirtualrouter.AppmeshVirtualRouter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.createdDate">CreatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.resourceOwner">ResourceOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference">AppmeshVirtualRouterSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshNameInput">MeshNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshOwnerInput">MeshOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshName">MeshName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshOwner">MeshOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.createdDate"></a>

```go
func CreatedDate() *string
```

- *Type:* *string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.lastUpdatedDate"></a>

```go
func LastUpdatedDate() *string
```

- *Type:* *string

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.resourceOwner"></a>

```go
func ResourceOwner() *string
```

- *Type:* *string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.spec"></a>

```go
func Spec() AppmeshVirtualRouterSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference">AppmeshVirtualRouterSpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MeshNameInput`<sup>Optional</sup> <a name="MeshNameInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshNameInput"></a>

```go
func MeshNameInput() *string
```

- *Type:* *string

---

##### `MeshOwnerInput`<sup>Optional</sup> <a name="MeshOwnerInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshOwnerInput"></a>

```go
func MeshOwnerInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.specInput"></a>

```go
func SpecInput() AppmeshVirtualRouterSpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MeshName`<sup>Required</sup> <a name="MeshName" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshName"></a>

```go
func MeshName() *string
```

- *Type:* *string

---

##### `MeshOwner`<sup>Required</sup> <a name="MeshOwner" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.meshOwner"></a>

```go
func MeshOwner() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshVirtualRouterConfig <a name="AppmeshVirtualRouterConfig" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualrouter"

&appmeshvirtualrouter.AppmeshVirtualRouterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MeshName: *string,
	Name: *string,
	Spec: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec,
	Id: *string,
	MeshOwner: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.meshName">MeshName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#mesh_name AppmeshVirtualRouter#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#name AppmeshVirtualRouter#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#id AppmeshVirtualRouter#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.meshOwner">MeshOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#mesh_owner AppmeshVirtualRouter#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#tags AppmeshVirtualRouter#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#tags_all AppmeshVirtualRouter#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MeshName`<sup>Required</sup> <a name="MeshName" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.meshName"></a>

```go
MeshName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#mesh_name AppmeshVirtualRouter#mesh_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#name AppmeshVirtualRouter#name}.

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.spec"></a>

```go
Spec AppmeshVirtualRouterSpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#spec AppmeshVirtualRouter#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#id AppmeshVirtualRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MeshOwner`<sup>Optional</sup> <a name="MeshOwner" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.meshOwner"></a>

```go
MeshOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#mesh_owner AppmeshVirtualRouter#mesh_owner}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#tags AppmeshVirtualRouter#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#tags_all AppmeshVirtualRouter#tags_all}.

---

### AppmeshVirtualRouterSpec <a name="AppmeshVirtualRouterSpec" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualrouter"

&appmeshvirtualrouter.AppmeshVirtualRouterSpec {
	Listener: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec.property.listener">Listener</a></code> | <code>interface{}</code> | listener block. |

---

##### `Listener`<sup>Optional</sup> <a name="Listener" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec.property.listener"></a>

```go
Listener interface{}
```

- *Type:* interface{}

listener block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#listener AppmeshVirtualRouter#listener}

---

### AppmeshVirtualRouterSpecListener <a name="AppmeshVirtualRouterSpecListener" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualrouter"

&appmeshvirtualrouter.AppmeshVirtualRouterSpecListener {
	PortMapping: github.com/cdktf/cdktf-provider-aws-go/aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener.property.portMapping">PortMapping</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a></code> | port_mapping block. |

---

##### `PortMapping`<sup>Required</sup> <a name="PortMapping" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListener.property.portMapping"></a>

```go
PortMapping AppmeshVirtualRouterSpecListenerPortMapping
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a>

port_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#port_mapping AppmeshVirtualRouter#port_mapping}

---

### AppmeshVirtualRouterSpecListenerPortMapping <a name="AppmeshVirtualRouterSpecListenerPortMapping" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualrouter"

&appmeshvirtualrouter.AppmeshVirtualRouterSpecListenerPortMapping {
	Port: *f64,
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#port AppmeshVirtualRouter#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#protocol AppmeshVirtualRouter#protocol}. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#port AppmeshVirtualRouter#port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router#protocol AppmeshVirtualRouter#protocol}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshVirtualRouterSpecListenerList <a name="AppmeshVirtualRouterSpecListenerList" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualrouter"

appmeshvirtualrouter.NewAppmeshVirtualRouterSpecListenerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppmeshVirtualRouterSpecListenerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.get"></a>

```go
func Get(index *f64) AppmeshVirtualRouterSpecListenerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppmeshVirtualRouterSpecListenerOutputReference <a name="AppmeshVirtualRouterSpecListenerOutputReference" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualrouter"

appmeshvirtualrouter.NewAppmeshVirtualRouterSpecListenerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppmeshVirtualRouterSpecListenerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.putPortMapping">PutPortMapping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortMapping` <a name="PutPortMapping" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.putPortMapping"></a>

```go
func PutPortMapping(value AppmeshVirtualRouterSpecListenerPortMapping)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.putPortMapping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.portMapping">PortMapping</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference">AppmeshVirtualRouterSpecListenerPortMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.portMappingInput">PortMappingInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortMapping`<sup>Required</sup> <a name="PortMapping" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.portMapping"></a>

```go
func PortMapping() AppmeshVirtualRouterSpecListenerPortMappingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference">AppmeshVirtualRouterSpecListenerPortMappingOutputReference</a>

---

##### `PortMappingInput`<sup>Optional</sup> <a name="PortMappingInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.portMappingInput"></a>

```go
func PortMappingInput() AppmeshVirtualRouterSpecListenerPortMapping
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppmeshVirtualRouterSpecListenerPortMappingOutputReference <a name="AppmeshVirtualRouterSpecListenerPortMappingOutputReference" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualrouter"

appmeshvirtualrouter.NewAppmeshVirtualRouterSpecListenerPortMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualRouterSpecListenerPortMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualRouterSpecListenerPortMapping
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerPortMapping">AppmeshVirtualRouterSpecListenerPortMapping</a>

---


### AppmeshVirtualRouterSpecOutputReference <a name="AppmeshVirtualRouterSpecOutputReference" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appmeshvirtualrouter"

appmeshvirtualrouter.NewAppmeshVirtualRouterSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshVirtualRouterSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.putListener">PutListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.resetListener">ResetListener</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutListener` <a name="PutListener" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.putListener"></a>

```go
func PutListener(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.putListener.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetListener` <a name="ResetListener" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.resetListener"></a>

```go
func ResetListener()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.listener">Listener</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList">AppmeshVirtualRouterSpecListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.listenerInput">ListenerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Listener`<sup>Required</sup> <a name="Listener" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.listener"></a>

```go
func Listener() AppmeshVirtualRouterSpecListenerList
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecListenerList">AppmeshVirtualRouterSpecListenerList</a>

---

##### `ListenerInput`<sup>Optional</sup> <a name="ListenerInput" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.listenerInput"></a>

```go
func ListenerInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshVirtualRouterSpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshVirtualRouter.AppmeshVirtualRouterSpec">AppmeshVirtualRouterSpec</a>

---



