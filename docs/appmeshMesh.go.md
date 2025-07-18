# `appmeshMesh` Submodule <a name="`appmeshMesh` Submodule" id="@cdktf/provider-aws.appmeshMesh"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshMesh <a name="AppmeshMesh" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh aws_appmesh_mesh}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appmeshmesh"

appmeshmesh.NewAppmeshMesh(scope Construct, id *string, config AppmeshMeshConfig) AppmeshMesh
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig">AppmeshMeshConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig">AppmeshMeshConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.resetSpec">ResetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.putSpec"></a>

```go
func PutSpec(value AppmeshMeshSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpec">AppmeshMeshSpec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.resetSpec"></a>

```go
func ResetSpec()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppmeshMesh resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appmeshmesh"

appmeshmesh.AppmeshMesh_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appmeshmesh"

appmeshmesh.AppmeshMesh_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appmeshmesh"

appmeshmesh.AppmeshMesh_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appmeshmesh"

appmeshmesh.AppmeshMesh_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppmeshMesh resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppmeshMesh to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppmeshMesh that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppmeshMesh to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.createdDate">CreatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.meshOwner">MeshOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.resourceOwner">ResourceOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference">AppmeshMeshSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpec">AppmeshMeshSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.createdDate"></a>

```go
func CreatedDate() *string
```

- *Type:* *string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.lastUpdatedDate"></a>

```go
func LastUpdatedDate() *string
```

- *Type:* *string

---

##### `MeshOwner`<sup>Required</sup> <a name="MeshOwner" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.meshOwner"></a>

```go
func MeshOwner() *string
```

- *Type:* *string

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.resourceOwner"></a>

```go
func ResourceOwner() *string
```

- *Type:* *string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.spec"></a>

```go
func Spec() AppmeshMeshSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference">AppmeshMeshSpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.specInput"></a>

```go
func SpecInput() AppmeshMeshSpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpec">AppmeshMeshSpec</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appmeshMesh.AppmeshMesh.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshMeshConfig <a name="AppmeshMeshConfig" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appmeshmesh"

&appmeshmesh.AppmeshMeshConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Region: *string,
	Spec: github.com/cdktf/cdktf-provider-aws-go/aws/v21.appmeshMesh.AppmeshMeshSpec,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#name AppmeshMesh#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#id AppmeshMesh#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpec">AppmeshMeshSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#tags AppmeshMesh#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#tags_all AppmeshMesh#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#name AppmeshMesh#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#id AppmeshMesh#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#region AppmeshMesh#region}

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.spec"></a>

```go
Spec AppmeshMeshSpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpec">AppmeshMeshSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#spec AppmeshMesh#spec}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#tags AppmeshMesh#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#tags_all AppmeshMesh#tags_all}.

---

### AppmeshMeshSpec <a name="AppmeshMeshSpec" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appmeshmesh"

&appmeshmesh.AppmeshMeshSpec {
	EgressFilter: github.com/cdktf/cdktf-provider-aws-go/aws/v21.appmeshMesh.AppmeshMeshSpecEgressFilter,
	ServiceDiscovery: github.com/cdktf/cdktf-provider-aws-go/aws/v21.appmeshMesh.AppmeshMeshSpecServiceDiscovery,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpec.property.egressFilter">EgressFilter</a></code> | <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilter">AppmeshMeshSpecEgressFilter</a></code> | egress_filter block. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpec.property.serviceDiscovery">ServiceDiscovery</a></code> | <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscovery">AppmeshMeshSpecServiceDiscovery</a></code> | service_discovery block. |

---

##### `EgressFilter`<sup>Optional</sup> <a name="EgressFilter" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpec.property.egressFilter"></a>

```go
EgressFilter AppmeshMeshSpecEgressFilter
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilter">AppmeshMeshSpecEgressFilter</a>

egress_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#egress_filter AppmeshMesh#egress_filter}

---

##### `ServiceDiscovery`<sup>Optional</sup> <a name="ServiceDiscovery" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpec.property.serviceDiscovery"></a>

```go
ServiceDiscovery AppmeshMeshSpecServiceDiscovery
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscovery">AppmeshMeshSpecServiceDiscovery</a>

service_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#service_discovery AppmeshMesh#service_discovery}

---

### AppmeshMeshSpecEgressFilter <a name="AppmeshMeshSpecEgressFilter" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appmeshmesh"

&appmeshmesh.AppmeshMeshSpecEgressFilter {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilter.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#type AppmeshMesh#type}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilter.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#type AppmeshMesh#type}.

---

### AppmeshMeshSpecServiceDiscovery <a name="AppmeshMeshSpecServiceDiscovery" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscovery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appmeshmesh"

&appmeshmesh.AppmeshMeshSpecServiceDiscovery {
	IpPreference: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscovery.property.ipPreference">IpPreference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#ip_preference AppmeshMesh#ip_preference}. |

---

##### `IpPreference`<sup>Optional</sup> <a name="IpPreference" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscovery.property.ipPreference"></a>

```go
IpPreference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appmesh_mesh#ip_preference AppmeshMesh#ip_preference}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshMeshSpecEgressFilterOutputReference <a name="AppmeshMeshSpecEgressFilterOutputReference" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appmeshmesh"

appmeshmesh.NewAppmeshMeshSpecEgressFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshMeshSpecEgressFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilter">AppmeshMeshSpecEgressFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshMeshSpecEgressFilter
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilter">AppmeshMeshSpecEgressFilter</a>

---


### AppmeshMeshSpecOutputReference <a name="AppmeshMeshSpecOutputReference" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appmeshmesh"

appmeshmesh.NewAppmeshMeshSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshMeshSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.putEgressFilter">PutEgressFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.putServiceDiscovery">PutServiceDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.resetEgressFilter">ResetEgressFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.resetServiceDiscovery">ResetServiceDiscovery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEgressFilter` <a name="PutEgressFilter" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.putEgressFilter"></a>

```go
func PutEgressFilter(value AppmeshMeshSpecEgressFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.putEgressFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilter">AppmeshMeshSpecEgressFilter</a>

---

##### `PutServiceDiscovery` <a name="PutServiceDiscovery" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.putServiceDiscovery"></a>

```go
func PutServiceDiscovery(value AppmeshMeshSpecServiceDiscovery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.putServiceDiscovery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscovery">AppmeshMeshSpecServiceDiscovery</a>

---

##### `ResetEgressFilter` <a name="ResetEgressFilter" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.resetEgressFilter"></a>

```go
func ResetEgressFilter()
```

##### `ResetServiceDiscovery` <a name="ResetServiceDiscovery" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.resetServiceDiscovery"></a>

```go
func ResetServiceDiscovery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.property.egressFilter">EgressFilter</a></code> | <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference">AppmeshMeshSpecEgressFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.property.serviceDiscovery">ServiceDiscovery</a></code> | <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference">AppmeshMeshSpecServiceDiscoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.property.egressFilterInput">EgressFilterInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilter">AppmeshMeshSpecEgressFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.property.serviceDiscoveryInput">ServiceDiscoveryInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscovery">AppmeshMeshSpecServiceDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpec">AppmeshMeshSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EgressFilter`<sup>Required</sup> <a name="EgressFilter" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.property.egressFilter"></a>

```go
func EgressFilter() AppmeshMeshSpecEgressFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilterOutputReference">AppmeshMeshSpecEgressFilterOutputReference</a>

---

##### `ServiceDiscovery`<sup>Required</sup> <a name="ServiceDiscovery" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.property.serviceDiscovery"></a>

```go
func ServiceDiscovery() AppmeshMeshSpecServiceDiscoveryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference">AppmeshMeshSpecServiceDiscoveryOutputReference</a>

---

##### `EgressFilterInput`<sup>Optional</sup> <a name="EgressFilterInput" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.property.egressFilterInput"></a>

```go
func EgressFilterInput() AppmeshMeshSpecEgressFilter
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecEgressFilter">AppmeshMeshSpecEgressFilter</a>

---

##### `ServiceDiscoveryInput`<sup>Optional</sup> <a name="ServiceDiscoveryInput" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.property.serviceDiscoveryInput"></a>

```go
func ServiceDiscoveryInput() AppmeshMeshSpecServiceDiscovery
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscovery">AppmeshMeshSpecServiceDiscovery</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshMeshSpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpec">AppmeshMeshSpec</a>

---


### AppmeshMeshSpecServiceDiscoveryOutputReference <a name="AppmeshMeshSpecServiceDiscoveryOutputReference" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/appmeshmesh"

appmeshmesh.NewAppmeshMeshSpecServiceDiscoveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppmeshMeshSpecServiceDiscoveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.resetIpPreference">ResetIpPreference</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpPreference` <a name="ResetIpPreference" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.resetIpPreference"></a>

```go
func ResetIpPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.property.ipPreferenceInput">IpPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.property.ipPreference">IpPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscovery">AppmeshMeshSpecServiceDiscovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpPreferenceInput`<sup>Optional</sup> <a name="IpPreferenceInput" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.property.ipPreferenceInput"></a>

```go
func IpPreferenceInput() *string
```

- *Type:* *string

---

##### `IpPreference`<sup>Required</sup> <a name="IpPreference" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.property.ipPreference"></a>

```go
func IpPreference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscoveryOutputReference.property.internalValue"></a>

```go
func InternalValue() AppmeshMeshSpecServiceDiscovery
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshMesh.AppmeshMeshSpecServiceDiscovery">AppmeshMeshSpecServiceDiscovery</a>

---



