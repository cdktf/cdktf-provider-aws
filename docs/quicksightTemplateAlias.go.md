# `quicksightTemplateAlias` Submodule <a name="`quicksightTemplateAlias` Submodule" id="@cdktf/provider-aws.quicksightTemplateAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightTemplateAlias <a name="QuicksightTemplateAlias" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/quicksight_template_alias aws_quicksight_template_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksighttemplatealias"

quicksighttemplatealias.NewQuicksightTemplateAlias(scope Construct, id *string, config QuicksightTemplateAliasConfig) QuicksightTemplateAlias
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig">QuicksightTemplateAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig">QuicksightTemplateAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightTemplateAlias resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksighttemplatealias"

quicksighttemplatealias.QuicksightTemplateAlias_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksighttemplatealias"

quicksighttemplatealias.QuicksightTemplateAlias_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksighttemplatealias"

quicksighttemplatealias.QuicksightTemplateAlias_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksighttemplatealias"

quicksighttemplatealias.QuicksightTemplateAlias_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a QuicksightTemplateAlias resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QuicksightTemplateAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QuicksightTemplateAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/quicksight_template_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightTemplateAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.aliasNameInput">AliasNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateIdInput">TemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateVersionNumberInput">TemplateVersionNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.aliasName">AliasName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateId">TemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateVersionNumber">TemplateVersionNumber</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AliasNameInput`<sup>Optional</sup> <a name="AliasNameInput" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.aliasNameInput"></a>

```go
func AliasNameInput() *string
```

- *Type:* *string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `TemplateIdInput`<sup>Optional</sup> <a name="TemplateIdInput" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateIdInput"></a>

```go
func TemplateIdInput() *string
```

- *Type:* *string

---

##### `TemplateVersionNumberInput`<sup>Optional</sup> <a name="TemplateVersionNumberInput" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateVersionNumberInput"></a>

```go
func TemplateVersionNumberInput() *f64
```

- *Type:* *f64

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.aliasName"></a>

```go
func AliasName() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateId"></a>

```go
func TemplateId() *string
```

- *Type:* *string

---

##### `TemplateVersionNumber`<sup>Required</sup> <a name="TemplateVersionNumber" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateVersionNumber"></a>

```go
func TemplateVersionNumber() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightTemplateAliasConfig <a name="QuicksightTemplateAliasConfig" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksighttemplatealias"

&quicksighttemplatealias.QuicksightTemplateAliasConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AliasName: *string,
	TemplateId: *string,
	TemplateVersionNumber: *f64,
	AwsAccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.aliasName">AliasName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/quicksight_template_alias#alias_name QuicksightTemplateAlias#alias_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.templateId">TemplateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/quicksight_template_alias#template_id QuicksightTemplateAlias#template_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.templateVersionNumber">TemplateVersionNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/quicksight_template_alias#template_version_number QuicksightTemplateAlias#template_version_number}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/quicksight_template_alias#aws_account_id QuicksightTemplateAlias#aws_account_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.aliasName"></a>

```go
AliasName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/quicksight_template_alias#alias_name QuicksightTemplateAlias#alias_name}.

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.templateId"></a>

```go
TemplateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/quicksight_template_alias#template_id QuicksightTemplateAlias#template_id}.

---

##### `TemplateVersionNumber`<sup>Required</sup> <a name="TemplateVersionNumber" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.templateVersionNumber"></a>

```go
TemplateVersionNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/quicksight_template_alias#template_version_number QuicksightTemplateAlias#template_version_number}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/quicksight_template_alias#aws_account_id QuicksightTemplateAlias#aws_account_id}.

---



