# `s3TablesTable` Submodule <a name="`s3TablesTable` Submodule" id="@cdktf/provider-aws.s3TablesTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3TablesTable <a name="S3TablesTable" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table aws_s3tables_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3tablestable"

s3tablestable.NewS3TablesTable(scope Construct, id *string, config S3TablesTableConfig) S3TablesTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig">S3TablesTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig">S3TablesTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.putMaintenanceConfiguration">PutMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.resetMaintenanceConfiguration">ResetMaintenanceConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMaintenanceConfiguration` <a name="PutMaintenanceConfiguration" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.putMaintenanceConfiguration"></a>

```go
func PutMaintenanceConfiguration(value S3TablesTableMaintenanceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.putMaintenanceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration">S3TablesTableMaintenanceConfiguration</a>

---

##### `ResetMaintenanceConfiguration` <a name="ResetMaintenanceConfiguration" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.resetMaintenanceConfiguration"></a>

```go
func ResetMaintenanceConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a S3TablesTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3tablestable"

s3tablestable.S3TablesTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3tablestable"

s3tablestable.S3TablesTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3tablestable"

s3tablestable.S3TablesTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3tablestable"

s3tablestable.S3TablesTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a S3TablesTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the S3TablesTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing S3TablesTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the S3TablesTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.maintenanceConfiguration">MaintenanceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference">S3TablesTableMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.metadataLocation">MetadataLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.modifiedBy">ModifiedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.ownerAccountId">OwnerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.versionToken">VersionToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.warehouseLocation">WarehouseLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.maintenanceConfigurationInput">MaintenanceConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.tableBucketArnInput">TableBucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.tableBucketArn">TableBucketArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `MaintenanceConfiguration`<sup>Required</sup> <a name="MaintenanceConfiguration" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.maintenanceConfiguration"></a>

```go
func MaintenanceConfiguration() S3TablesTableMaintenanceConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference">S3TablesTableMaintenanceConfigurationOutputReference</a>

---

##### `MetadataLocation`<sup>Required</sup> <a name="MetadataLocation" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.metadataLocation"></a>

```go
func MetadataLocation() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `ModifiedBy`<sup>Required</sup> <a name="ModifiedBy" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.modifiedBy"></a>

```go
func ModifiedBy() *string
```

- *Type:* *string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.ownerAccountId"></a>

```go
func OwnerAccountId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VersionToken`<sup>Required</sup> <a name="VersionToken" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.versionToken"></a>

```go
func VersionToken() *string
```

- *Type:* *string

---

##### `WarehouseLocation`<sup>Required</sup> <a name="WarehouseLocation" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.warehouseLocation"></a>

```go
func WarehouseLocation() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `MaintenanceConfigurationInput`<sup>Optional</sup> <a name="MaintenanceConfigurationInput" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.maintenanceConfigurationInput"></a>

```go
func MaintenanceConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TableBucketArnInput`<sup>Optional</sup> <a name="TableBucketArnInput" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.tableBucketArnInput"></a>

```go
func TableBucketArnInput() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `TableBucketArn`<sup>Required</sup> <a name="TableBucketArn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.tableBucketArn"></a>

```go
func TableBucketArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3TablesTable.S3TablesTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3TablesTableConfig <a name="S3TablesTableConfig" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3tablestable"

&s3tablestable.S3TablesTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Format: *string,
	Name: *string,
	Namespace: *string,
	TableBucketArn: *string,
	MaintenanceConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.s3TablesTable.S3TablesTableMaintenanceConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#format S3TablesTable#format}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#name S3TablesTable#name}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#namespace S3TablesTable#namespace}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.tableBucketArn">TableBucketArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#table_bucket_arn S3TablesTable#table_bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.maintenanceConfiguration">MaintenanceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration">S3TablesTableMaintenanceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#maintenance_configuration S3TablesTable#maintenance_configuration}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#format S3TablesTable#format}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#name S3TablesTable#name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#namespace S3TablesTable#namespace}.

---

##### `TableBucketArn`<sup>Required</sup> <a name="TableBucketArn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.tableBucketArn"></a>

```go
TableBucketArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#table_bucket_arn S3TablesTable#table_bucket_arn}.

---

##### `MaintenanceConfiguration`<sup>Optional</sup> <a name="MaintenanceConfiguration" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableConfig.property.maintenanceConfiguration"></a>

```go
MaintenanceConfiguration S3TablesTableMaintenanceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration">S3TablesTableMaintenanceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#maintenance_configuration S3TablesTable#maintenance_configuration}.

---

### S3TablesTableMaintenanceConfiguration <a name="S3TablesTableMaintenanceConfiguration" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3tablestable"

&s3tablestable.S3TablesTableMaintenanceConfiguration {
	IcebergCompaction: github.com/cdktf/cdktf-provider-aws-go/aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction,
	IcebergSnapshotManagement: github.com/cdktf/cdktf-provider-aws-go/aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration.property.icebergCompaction">IcebergCompaction</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction">S3TablesTableMaintenanceConfigurationIcebergCompaction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#iceberg_compaction S3TablesTable#iceberg_compaction}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration.property.icebergSnapshotManagement">IcebergSnapshotManagement</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#iceberg_snapshot_management S3TablesTable#iceberg_snapshot_management}. |

---

##### `IcebergCompaction`<sup>Optional</sup> <a name="IcebergCompaction" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration.property.icebergCompaction"></a>

```go
IcebergCompaction S3TablesTableMaintenanceConfigurationIcebergCompaction
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction">S3TablesTableMaintenanceConfigurationIcebergCompaction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#iceberg_compaction S3TablesTable#iceberg_compaction}.

---

##### `IcebergSnapshotManagement`<sup>Optional</sup> <a name="IcebergSnapshotManagement" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfiguration.property.icebergSnapshotManagement"></a>

```go
IcebergSnapshotManagement S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#iceberg_snapshot_management S3TablesTable#iceberg_snapshot_management}.

---

### S3TablesTableMaintenanceConfigurationIcebergCompaction <a name="S3TablesTableMaintenanceConfigurationIcebergCompaction" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3tablestable"

&s3tablestable.S3TablesTableMaintenanceConfigurationIcebergCompaction {
	Settings: github.com/cdktf/cdktf-provider-aws-go/aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings">S3TablesTableMaintenanceConfigurationIcebergCompactionSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#settings S3TablesTable#settings}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#status S3TablesTable#status}. |

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction.property.settings"></a>

```go
Settings S3TablesTableMaintenanceConfigurationIcebergCompactionSettings
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings">S3TablesTableMaintenanceConfigurationIcebergCompactionSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#settings S3TablesTable#settings}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#status S3TablesTable#status}.

---

### S3TablesTableMaintenanceConfigurationIcebergCompactionSettings <a name="S3TablesTableMaintenanceConfigurationIcebergCompactionSettings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3tablestable"

&s3tablestable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings {
	TargetFileSizeMb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings.property.targetFileSizeMb">TargetFileSizeMb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#target_file_size_mb S3TablesTable#target_file_size_mb}. |

---

##### `TargetFileSizeMb`<sup>Optional</sup> <a name="TargetFileSizeMb" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings.property.targetFileSizeMb"></a>

```go
TargetFileSizeMb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#target_file_size_mb S3TablesTable#target_file_size_mb}.

---

### S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement <a name="S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3tablestable"

&s3tablestable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement {
	Settings: github.com/cdktf/cdktf-provider-aws-go/aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#settings S3TablesTable#settings}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#status S3TablesTable#status}. |

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement.property.settings"></a>

```go
Settings S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#settings S3TablesTable#settings}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#status S3TablesTable#status}.

---

### S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings <a name="S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3tablestable"

&s3tablestable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings {
	MaxSnapshotAgeHours: *f64,
	MinSnapshotsToKeep: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings.property.maxSnapshotAgeHours">MaxSnapshotAgeHours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#max_snapshot_age_hours S3TablesTable#max_snapshot_age_hours}. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings.property.minSnapshotsToKeep">MinSnapshotsToKeep</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#min_snapshots_to_keep S3TablesTable#min_snapshots_to_keep}. |

---

##### `MaxSnapshotAgeHours`<sup>Optional</sup> <a name="MaxSnapshotAgeHours" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings.property.maxSnapshotAgeHours"></a>

```go
MaxSnapshotAgeHours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#max_snapshot_age_hours S3TablesTable#max_snapshot_age_hours}.

---

##### `MinSnapshotsToKeep`<sup>Optional</sup> <a name="MinSnapshotsToKeep" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings.property.minSnapshotsToKeep"></a>

```go
MinSnapshotsToKeep *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3tables_table#min_snapshots_to_keep S3TablesTable#min_snapshots_to_keep}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference <a name="S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3tablestable"

s3tablestable.NewS3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.putSettings"></a>

```go
func PutSettings(value S3TablesTableMaintenanceConfigurationIcebergCompactionSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettings">S3TablesTableMaintenanceConfigurationIcebergCompactionSettings</a>

---

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.resetSettings"></a>

```go
func ResetSettings()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference">S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.settingsInput">SettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.settings"></a>

```go
func Settings() S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference">S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference</a>

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.settingsInput"></a>

```go
func SettingsInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference <a name="S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3tablestable"

s3tablestable.NewS3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.resetTargetFileSizeMb">ResetTargetFileSizeMb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetFileSizeMb` <a name="ResetTargetFileSizeMb" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.resetTargetFileSizeMb"></a>

```go
func ResetTargetFileSizeMb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.targetFileSizeMbInput">TargetFileSizeMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.targetFileSizeMb">TargetFileSizeMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetFileSizeMbInput`<sup>Optional</sup> <a name="TargetFileSizeMbInput" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.targetFileSizeMbInput"></a>

```go
func TargetFileSizeMbInput() *f64
```

- *Type:* *f64

---

##### `TargetFileSizeMb`<sup>Required</sup> <a name="TargetFileSizeMb" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.targetFileSizeMb"></a>

```go
func TargetFileSizeMb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference <a name="S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3tablestable"

s3tablestable.NewS3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.putSettings"></a>

```go
func PutSettings(value S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettings</a>

---

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.resetSettings"></a>

```go
func ResetSettings()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.settingsInput">SettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.settings"></a>

```go
func Settings() S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference</a>

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.settingsInput"></a>

```go
func SettingsInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference <a name="S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3tablestable"

s3tablestable.NewS3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.resetMaxSnapshotAgeHours">ResetMaxSnapshotAgeHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.resetMinSnapshotsToKeep">ResetMinSnapshotsToKeep</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxSnapshotAgeHours` <a name="ResetMaxSnapshotAgeHours" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.resetMaxSnapshotAgeHours"></a>

```go
func ResetMaxSnapshotAgeHours()
```

##### `ResetMinSnapshotsToKeep` <a name="ResetMinSnapshotsToKeep" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.resetMinSnapshotsToKeep"></a>

```go
func ResetMinSnapshotsToKeep()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.maxSnapshotAgeHoursInput">MaxSnapshotAgeHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.minSnapshotsToKeepInput">MinSnapshotsToKeepInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.maxSnapshotAgeHours">MaxSnapshotAgeHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.minSnapshotsToKeep">MinSnapshotsToKeep</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxSnapshotAgeHoursInput`<sup>Optional</sup> <a name="MaxSnapshotAgeHoursInput" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.maxSnapshotAgeHoursInput"></a>

```go
func MaxSnapshotAgeHoursInput() *f64
```

- *Type:* *f64

---

##### `MinSnapshotsToKeepInput`<sup>Optional</sup> <a name="MinSnapshotsToKeepInput" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.minSnapshotsToKeepInput"></a>

```go
func MinSnapshotsToKeepInput() *f64
```

- *Type:* *f64

---

##### `MaxSnapshotAgeHours`<sup>Required</sup> <a name="MaxSnapshotAgeHours" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.maxSnapshotAgeHours"></a>

```go
func MaxSnapshotAgeHours() *f64
```

- *Type:* *f64

---

##### `MinSnapshotsToKeep`<sup>Required</sup> <a name="MinSnapshotsToKeep" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.minSnapshotsToKeep"></a>

```go
func MinSnapshotsToKeep() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableMaintenanceConfigurationOutputReference <a name="S3TablesTableMaintenanceConfigurationOutputReference" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3tablestable"

s3tablestable.NewS3TablesTableMaintenanceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3TablesTableMaintenanceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.putIcebergCompaction">PutIcebergCompaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.putIcebergSnapshotManagement">PutIcebergSnapshotManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.resetIcebergCompaction">ResetIcebergCompaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.resetIcebergSnapshotManagement">ResetIcebergSnapshotManagement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIcebergCompaction` <a name="PutIcebergCompaction" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.putIcebergCompaction"></a>

```go
func PutIcebergCompaction(value S3TablesTableMaintenanceConfigurationIcebergCompaction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.putIcebergCompaction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompaction">S3TablesTableMaintenanceConfigurationIcebergCompaction</a>

---

##### `PutIcebergSnapshotManagement` <a name="PutIcebergSnapshotManagement" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.putIcebergSnapshotManagement"></a>

```go
func PutIcebergSnapshotManagement(value S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.putIcebergSnapshotManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagement</a>

---

##### `ResetIcebergCompaction` <a name="ResetIcebergCompaction" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.resetIcebergCompaction"></a>

```go
func ResetIcebergCompaction()
```

##### `ResetIcebergSnapshotManagement` <a name="ResetIcebergSnapshotManagement" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.resetIcebergSnapshotManagement"></a>

```go
func ResetIcebergSnapshotManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.icebergCompaction">IcebergCompaction</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference">S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.icebergSnapshotManagement">IcebergSnapshotManagement</a></code> | <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.icebergCompactionInput">IcebergCompactionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.icebergSnapshotManagementInput">IcebergSnapshotManagementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IcebergCompaction`<sup>Required</sup> <a name="IcebergCompaction" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.icebergCompaction"></a>

```go
func IcebergCompaction() S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference">S3TablesTableMaintenanceConfigurationIcebergCompactionOutputReference</a>

---

##### `IcebergSnapshotManagement`<sup>Required</sup> <a name="IcebergSnapshotManagement" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.icebergSnapshotManagement"></a>

```go
func IcebergSnapshotManagement() S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference">S3TablesTableMaintenanceConfigurationIcebergSnapshotManagementOutputReference</a>

---

##### `IcebergCompactionInput`<sup>Optional</sup> <a name="IcebergCompactionInput" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.icebergCompactionInput"></a>

```go
func IcebergCompactionInput() interface{}
```

- *Type:* interface{}

---

##### `IcebergSnapshotManagementInput`<sup>Optional</sup> <a name="IcebergSnapshotManagementInput" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.icebergSnapshotManagementInput"></a>

```go
func IcebergSnapshotManagementInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3TablesTable.S3TablesTableMaintenanceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



