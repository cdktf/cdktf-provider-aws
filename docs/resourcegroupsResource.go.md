# `resourcegroupsResource` Submodule <a name="`resourcegroupsResource` Submodule" id="@cdktf/provider-aws.resourcegroupsResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcegroupsResource <a name="ResourcegroupsResource" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/resourcegroups_resource aws_resourcegroups_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/resourcegroupsresource"

resourcegroupsresource.NewResourcegroupsResource(scope Construct, id *string, config ResourcegroupsResourceConfig) ResourcegroupsResource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig">ResourcegroupsResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig">ResourcegroupsResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.putTimeouts"></a>

```go
func PutTimeouts(value ResourcegroupsResourceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeouts">ResourcegroupsResourceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ResourcegroupsResource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/resourcegroupsresource"

resourcegroupsresource.ResourcegroupsResource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/resourcegroupsresource"

resourcegroupsresource.ResourcegroupsResource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/resourcegroupsresource"

resourcegroupsresource.ResourcegroupsResource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/resourcegroupsresource"

resourcegroupsresource.ResourcegroupsResource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ResourcegroupsResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ResourcegroupsResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ResourcegroupsResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/resourcegroups_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ResourcegroupsResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference">ResourcegroupsResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.groupArnInput">GroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.resourceArnInput">ResourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.groupArn">GroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.timeouts"></a>

```go
func Timeouts() ResourcegroupsResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference">ResourcegroupsResourceTimeoutsOutputReference</a>

---

##### `GroupArnInput`<sup>Optional</sup> <a name="GroupArnInput" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.groupArnInput"></a>

```go
func GroupArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.resourceArnInput"></a>

```go
func ResourceArnInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `GroupArn`<sup>Required</sup> <a name="GroupArn" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.groupArn"></a>

```go
func GroupArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcegroupsResourceConfig <a name="ResourcegroupsResourceConfig" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/resourcegroupsresource"

&resourcegroupsresource.ResourcegroupsResourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupArn: *string,
	ResourceArn: *string,
	Id: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.resourcegroupsResource.ResourcegroupsResourceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.groupArn">GroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/resourcegroups_resource#group_arn ResourcegroupsResource#group_arn}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/resourcegroups_resource#resource_arn ResourcegroupsResource#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/resourcegroups_resource#id ResourcegroupsResource#id}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeouts">ResourcegroupsResourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupArn`<sup>Required</sup> <a name="GroupArn" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.groupArn"></a>

```go
GroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/resourcegroups_resource#group_arn ResourcegroupsResource#group_arn}.

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.resourceArn"></a>

```go
ResourceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/resourcegroups_resource#resource_arn ResourcegroupsResource#resource_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/resourcegroups_resource#id ResourcegroupsResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/resourcegroups_resource#region ResourcegroupsResource#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceConfig.property.timeouts"></a>

```go
Timeouts ResourcegroupsResourceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeouts">ResourcegroupsResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/resourcegroups_resource#timeouts ResourcegroupsResource#timeouts}

---

### ResourcegroupsResourceTimeouts <a name="ResourcegroupsResourceTimeouts" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/resourcegroupsresource"

&resourcegroupsresource.ResourcegroupsResourceTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/resourcegroups_resource#create ResourcegroupsResource#create}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/resourcegroups_resource#delete ResourcegroupsResource#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/resourcegroups_resource#create ResourcegroupsResource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/resourcegroups_resource#delete ResourcegroupsResource#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourcegroupsResourceTimeoutsOutputReference <a name="ResourcegroupsResourceTimeoutsOutputReference" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/resourcegroupsresource"

resourcegroupsresource.NewResourcegroupsResourceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResourcegroupsResourceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.resourcegroupsResource.ResourcegroupsResourceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



