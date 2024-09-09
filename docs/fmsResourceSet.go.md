# `fmsResourceSet` Submodule <a name="`fmsResourceSet` Submodule" id="@cdktf/provider-aws.fmsResourceSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FmsResourceSet <a name="FmsResourceSet" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set aws_fms_resource_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmsresourceset"

fmsresourceset.NewFmsResourceSet(scope Construct, id *string, config FmsResourceSetConfig) FmsResourceSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig">FmsResourceSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig">FmsResourceSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.putResourceSet">PutResourceSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.resetResourceSet">ResetResourceSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceSet` <a name="PutResourceSet" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.putResourceSet"></a>

```go
func PutResourceSet(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.putResourceSet.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.putTimeouts"></a>

```go
func PutTimeouts(value FmsResourceSetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeouts">FmsResourceSetTimeouts</a>

---

##### `ResetResourceSet` <a name="ResetResourceSet" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.resetResourceSet"></a>

```go
func ResetResourceSet()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FmsResourceSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmsresourceset"

fmsresourceset.FmsResourceSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmsresourceset"

fmsresourceset.FmsResourceSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmsresourceset"

fmsresourceset.FmsResourceSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmsresourceset"

fmsresourceset.FmsResourceSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FmsResourceSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FmsResourceSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FmsResourceSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FmsResourceSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.resourceSet">ResourceSet</a></code> | <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList">FmsResourceSetResourceSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference">FmsResourceSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.resourceSetInput">ResourceSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceSet`<sup>Required</sup> <a name="ResourceSet" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.resourceSet"></a>

```go
func ResourceSet() FmsResourceSetResourceSetList
```

- *Type:* <a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList">FmsResourceSetResourceSetList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.timeouts"></a>

```go
func Timeouts() FmsResourceSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference">FmsResourceSetTimeoutsOutputReference</a>

---

##### `ResourceSetInput`<sup>Optional</sup> <a name="ResourceSetInput" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.resourceSetInput"></a>

```go
func ResourceSetInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FmsResourceSetConfig <a name="FmsResourceSetConfig" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmsresourceset"

&fmsresourceset.FmsResourceSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ResourceSet: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.fmsResourceSet.FmsResourceSetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.resourceSet">ResourceSet</a></code> | <code>interface{}</code> | resource_set block. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#tags FmsResourceSet#tags}. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeouts">FmsResourceSetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceSet`<sup>Optional</sup> <a name="ResourceSet" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.resourceSet"></a>

```go
ResourceSet interface{}
```

- *Type:* interface{}

resource_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#resource_set FmsResourceSet#resource_set}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#tags FmsResourceSet#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetConfig.property.timeouts"></a>

```go
Timeouts FmsResourceSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeouts">FmsResourceSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#timeouts FmsResourceSet#timeouts}

---

### FmsResourceSetResourceSet <a name="FmsResourceSetResourceSet" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmsresourceset"

&fmsresourceset.FmsResourceSetResourceSet {
	Name: *string,
	Description: *string,
	ResourceSetStatus: *string,
	ResourceTypeList: *[]*string,
	UpdateToken: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSet.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#name FmsResourceSet#name}. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSet.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#description FmsResourceSet#description}. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSet.property.resourceSetStatus">ResourceSetStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#resource_set_status FmsResourceSet#resource_set_status}. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSet.property.resourceTypeList">ResourceTypeList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#resource_type_list FmsResourceSet#resource_type_list}. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSet.property.updateToken">UpdateToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#update_token FmsResourceSet#update_token}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSet.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#name FmsResourceSet#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSet.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#description FmsResourceSet#description}.

---

##### `ResourceSetStatus`<sup>Optional</sup> <a name="ResourceSetStatus" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSet.property.resourceSetStatus"></a>

```go
ResourceSetStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#resource_set_status FmsResourceSet#resource_set_status}.

---

##### `ResourceTypeList`<sup>Optional</sup> <a name="ResourceTypeList" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSet.property.resourceTypeList"></a>

```go
ResourceTypeList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#resource_type_list FmsResourceSet#resource_type_list}.

---

##### `UpdateToken`<sup>Optional</sup> <a name="UpdateToken" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSet.property.updateToken"></a>

```go
UpdateToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#update_token FmsResourceSet#update_token}.

---

### FmsResourceSetTimeouts <a name="FmsResourceSetTimeouts" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmsresourceset"

&fmsresourceset.FmsResourceSetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#create FmsResourceSet#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#delete FmsResourceSet#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/fms_resource_set#update FmsResourceSet#update}

---

## Classes <a name="Classes" id="Classes"></a>

### FmsResourceSetResourceSetList <a name="FmsResourceSetResourceSetList" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmsresourceset"

fmsresourceset.NewFmsResourceSetResourceSetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FmsResourceSetResourceSetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.get"></a>

```go
func Get(index *f64) FmsResourceSetResourceSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FmsResourceSetResourceSetOutputReference <a name="FmsResourceSetResourceSetOutputReference" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmsresourceset"

fmsresourceset.NewFmsResourceSetResourceSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FmsResourceSetResourceSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.resetResourceSetStatus">ResetResourceSetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.resetResourceTypeList">ResetResourceTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.resetUpdateToken">ResetUpdateToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetResourceSetStatus` <a name="ResetResourceSetStatus" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.resetResourceSetStatus"></a>

```go
func ResetResourceSetStatus()
```

##### `ResetResourceTypeList` <a name="ResetResourceTypeList" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.resetResourceTypeList"></a>

```go
func ResetResourceTypeList()
```

##### `ResetUpdateToken` <a name="ResetUpdateToken" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.resetUpdateToken"></a>

```go
func ResetUpdateToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.lastUpdateTime">LastUpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.resourceSetStatusInput">ResourceSetStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.resourceTypeListInput">ResourceTypeListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.updateTokenInput">UpdateTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.resourceSetStatus">ResourceSetStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.resourceTypeList">ResourceTypeList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.updateToken">UpdateToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.lastUpdateTime"></a>

```go
func LastUpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceSetStatusInput`<sup>Optional</sup> <a name="ResourceSetStatusInput" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.resourceSetStatusInput"></a>

```go
func ResourceSetStatusInput() *string
```

- *Type:* *string

---

##### `ResourceTypeListInput`<sup>Optional</sup> <a name="ResourceTypeListInput" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.resourceTypeListInput"></a>

```go
func ResourceTypeListInput() *[]*string
```

- *Type:* *[]*string

---

##### `UpdateTokenInput`<sup>Optional</sup> <a name="UpdateTokenInput" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.updateTokenInput"></a>

```go
func UpdateTokenInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceSetStatus`<sup>Required</sup> <a name="ResourceSetStatus" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.resourceSetStatus"></a>

```go
func ResourceSetStatus() *string
```

- *Type:* *string

---

##### `ResourceTypeList`<sup>Required</sup> <a name="ResourceTypeList" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.resourceTypeList"></a>

```go
func ResourceTypeList() *[]*string
```

- *Type:* *[]*string

---

##### `UpdateToken`<sup>Required</sup> <a name="UpdateToken" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.updateToken"></a>

```go
func UpdateToken() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetResourceSetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FmsResourceSetTimeoutsOutputReference <a name="FmsResourceSetTimeoutsOutputReference" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmsresourceset"

fmsresourceset.NewFmsResourceSetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FmsResourceSetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fmsResourceSet.FmsResourceSetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



