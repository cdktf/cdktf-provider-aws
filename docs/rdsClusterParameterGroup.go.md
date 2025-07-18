# `rdsClusterParameterGroup` Submodule <a name="`rdsClusterParameterGroup` Submodule" id="@cdktf/provider-aws.rdsClusterParameterGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsClusterParameterGroup <a name="RdsClusterParameterGroup" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group aws_rds_cluster_parameter_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/rdsclusterparametergroup"

rdsclusterparametergroup.NewRdsClusterParameterGroup(scope Construct, id *string, config RdsClusterParameterGroupConfig) RdsClusterParameterGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig">RdsClusterParameterGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig">RdsClusterParameterGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.putParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetParameter"></a>

```go
func ResetParameter()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RdsClusterParameterGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/rdsclusterparametergroup"

rdsclusterparametergroup.RdsClusterParameterGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/rdsclusterparametergroup"

rdsclusterparametergroup.RdsClusterParameterGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/rdsclusterparametergroup"

rdsclusterparametergroup.RdsClusterParameterGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/rdsclusterparametergroup"

rdsclusterparametergroup.RdsClusterParameterGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RdsClusterParameterGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RdsClusterParameterGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RdsClusterParameterGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RdsClusterParameterGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList">RdsClusterParameterGroupParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.familyInput">FamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.family">Family</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.parameter"></a>

```go
func Parameter() RdsClusterParameterGroupParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList">RdsClusterParameterGroupParameterList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.familyInput"></a>

```go
func FamilyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.family"></a>

```go
func Family() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsClusterParameterGroupConfig <a name="RdsClusterParameterGroupConfig" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/rdsclusterparametergroup"

&rdsclusterparametergroup.RdsClusterParameterGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Family: *string,
	Description: *string,
	Id: *string,
	Name: *string,
	NamePrefix: *string,
	Parameter: interface{},
	Region: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.family">Family</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#family RdsClusterParameterGroup#family}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#description RdsClusterParameterGroup#description}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#id RdsClusterParameterGroup#id}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#name RdsClusterParameterGroup#name}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#name_prefix RdsClusterParameterGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#tags RdsClusterParameterGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#tags_all RdsClusterParameterGroup#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.family"></a>

```go
Family *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#family RdsClusterParameterGroup#family}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#description RdsClusterParameterGroup#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#id RdsClusterParameterGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#name RdsClusterParameterGroup#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#name_prefix RdsClusterParameterGroup#name_prefix}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#parameter RdsClusterParameterGroup#parameter}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#region RdsClusterParameterGroup#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#tags RdsClusterParameterGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#tags_all RdsClusterParameterGroup#tags_all}.

---

### RdsClusterParameterGroupParameter <a name="RdsClusterParameterGroupParameter" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/rdsclusterparametergroup"

&rdsclusterparametergroup.RdsClusterParameterGroupParameter {
	Name: *string,
	Value: *string,
	ApplyMethod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#name RdsClusterParameterGroup#name}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#value RdsClusterParameterGroup#value}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter.property.applyMethod">ApplyMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#apply_method RdsClusterParameterGroup#apply_method}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#name RdsClusterParameterGroup#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#value RdsClusterParameterGroup#value}.

---

##### `ApplyMethod`<sup>Optional</sup> <a name="ApplyMethod" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameter.property.applyMethod"></a>

```go
ApplyMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster_parameter_group#apply_method RdsClusterParameterGroup#apply_method}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsClusterParameterGroupParameterList <a name="RdsClusterParameterGroupParameterList" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/rdsclusterparametergroup"

rdsclusterparametergroup.NewRdsClusterParameterGroupParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RdsClusterParameterGroupParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.get"></a>

```go
func Get(index *f64) RdsClusterParameterGroupParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsClusterParameterGroupParameterOutputReference <a name="RdsClusterParameterGroupParameterOutputReference" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/rdsclusterparametergroup"

rdsclusterparametergroup.NewRdsClusterParameterGroupParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RdsClusterParameterGroupParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.resetApplyMethod">ResetApplyMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplyMethod` <a name="ResetApplyMethod" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.resetApplyMethod"></a>

```go
func ResetApplyMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.applyMethodInput">ApplyMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.applyMethod">ApplyMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplyMethodInput`<sup>Optional</sup> <a name="ApplyMethodInput" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.applyMethodInput"></a>

```go
func ApplyMethodInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ApplyMethod`<sup>Required</sup> <a name="ApplyMethod" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.applyMethod"></a>

```go
func ApplyMethod() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsClusterParameterGroup.RdsClusterParameterGroupParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



