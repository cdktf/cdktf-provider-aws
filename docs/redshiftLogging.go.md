# `redshiftLogging` Submodule <a name="`redshiftLogging` Submodule" id="@cdktf/provider-aws.redshiftLogging"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftLogging <a name="RedshiftLogging" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/redshift_logging aws_redshift_logging}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftlogging"

redshiftlogging.NewRedshiftLogging(scope Construct, id *string, config RedshiftLoggingConfig) RedshiftLogging
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig">RedshiftLoggingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig">RedshiftLoggingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.resetLogDestinationType">ResetLogDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.resetLogExports">ResetLogExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetLogDestinationType` <a name="ResetLogDestinationType" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.resetLogDestinationType"></a>

```go
func ResetLogDestinationType()
```

##### `ResetLogExports` <a name="ResetLogExports" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.resetLogExports"></a>

```go
func ResetLogExports()
```

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.resetS3KeyPrefix"></a>

```go
func ResetS3KeyPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RedshiftLogging resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftlogging"

redshiftlogging.RedshiftLogging_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftlogging"

redshiftlogging.RedshiftLogging_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftlogging"

redshiftlogging.RedshiftLogging_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftlogging"

redshiftlogging.RedshiftLogging_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RedshiftLogging resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RedshiftLogging to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RedshiftLogging that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/redshift_logging#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftLogging to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.logDestinationTypeInput">LogDestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.logExportsInput">LogExportsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.logDestinationType">LogDestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.logExports">LogExports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.clusterIdentifierInput"></a>

```go
func ClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `LogDestinationTypeInput`<sup>Optional</sup> <a name="LogDestinationTypeInput" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.logDestinationTypeInput"></a>

```go
func LogDestinationTypeInput() *string
```

- *Type:* *string

---

##### `LogExportsInput`<sup>Optional</sup> <a name="LogExportsInput" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.logExportsInput"></a>

```go
func LogExportsInput() *[]*string
```

- *Type:* *[]*string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.s3KeyPrefixInput"></a>

```go
func S3KeyPrefixInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.clusterIdentifier"></a>

```go
func ClusterIdentifier() *string
```

- *Type:* *string

---

##### `LogDestinationType`<sup>Required</sup> <a name="LogDestinationType" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.logDestinationType"></a>

```go
func LogDestinationType() *string
```

- *Type:* *string

---

##### `LogExports`<sup>Required</sup> <a name="LogExports" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.logExports"></a>

```go
func LogExports() *[]*string
```

- *Type:* *[]*string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.s3KeyPrefix"></a>

```go
func S3KeyPrefix() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.redshiftLogging.RedshiftLogging.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftLoggingConfig <a name="RedshiftLoggingConfig" id="@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftlogging"

&redshiftlogging.RedshiftLoggingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterIdentifier: *string,
	BucketName: *string,
	LogDestinationType: *string,
	LogExports: *[]*string,
	S3KeyPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/redshift_logging#cluster_identifier RedshiftLogging#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/redshift_logging#bucket_name RedshiftLogging#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.logDestinationType">LogDestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/redshift_logging#log_destination_type RedshiftLogging#log_destination_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.logExports">LogExports</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/redshift_logging#log_exports RedshiftLogging#log_exports}. |
| <code><a href="#@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/redshift_logging#s3_key_prefix RedshiftLogging#s3_key_prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.clusterIdentifier"></a>

```go
ClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/redshift_logging#cluster_identifier RedshiftLogging#cluster_identifier}.

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/redshift_logging#bucket_name RedshiftLogging#bucket_name}.

---

##### `LogDestinationType`<sup>Optional</sup> <a name="LogDestinationType" id="@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.logDestinationType"></a>

```go
LogDestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/redshift_logging#log_destination_type RedshiftLogging#log_destination_type}.

---

##### `LogExports`<sup>Optional</sup> <a name="LogExports" id="@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.logExports"></a>

```go
LogExports *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/redshift_logging#log_exports RedshiftLogging#log_exports}.

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.redshiftLogging.RedshiftLoggingConfig.property.s3KeyPrefix"></a>

```go
S3KeyPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/redshift_logging#s3_key_prefix RedshiftLogging#s3_key_prefix}.

---



