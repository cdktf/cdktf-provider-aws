# `dataAwsQuicksightDataSet` Submodule <a name="`dataAwsQuicksightDataSet` Submodule" id="@cdktf/provider-aws.dataAwsQuicksightDataSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsQuicksightDataSet <a name="DataAwsQuicksightDataSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/quicksight_data_set aws_quicksight_data_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSet(scope Construct, id *string, config DataAwsQuicksightDataSetConfig) DataAwsQuicksightDataSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig">DataAwsQuicksightDataSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig">DataAwsQuicksightDataSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.putColumnLevelPermissionRules">PutColumnLevelPermissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetColumnLevelPermissionRules">ResetColumnLevelPermissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutColumnLevelPermissionRules` <a name="PutColumnLevelPermissionRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.putColumnLevelPermissionRules"></a>

```go
func PutColumnLevelPermissionRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.putColumnLevelPermissionRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

##### `ResetColumnLevelPermissionRules` <a name="ResetColumnLevelPermissionRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetColumnLevelPermissionRules"></a>

```go
func ResetColumnLevelPermissionRules()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.DataAwsQuicksightDataSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.DataAwsQuicksightDataSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.DataAwsQuicksightDataSet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnGroups">ColumnGroups</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList">DataAwsQuicksightDataSetColumnGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnLevelPermissionRules">ColumnLevelPermissionRules</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList">DataAwsQuicksightDataSetColumnLevelPermissionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetUsageConfiguration">DataSetUsageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList">DataAwsQuicksightDataSetDataSetUsageConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.fieldFolders">FieldFolders</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList">DataAwsQuicksightDataSetFieldFoldersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.importMode">ImportMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.logicalTableMap">LogicalTableMap</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList">DataAwsQuicksightDataSetLogicalTableMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList">DataAwsQuicksightDataSetPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.physicalTableMap">PhysicalTableMap</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList">DataAwsQuicksightDataSetPhysicalTableMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.rowLevelPermissionDataSet">RowLevelPermissionDataSet</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList">DataAwsQuicksightDataSetRowLevelPermissionDataSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.rowLevelPermissionTagConfiguration">RowLevelPermissionTagConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnLevelPermissionRulesInput">ColumnLevelPermissionRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetIdInput">DataSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetId">DataSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ColumnGroups`<sup>Required</sup> <a name="ColumnGroups" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnGroups"></a>

```go
func ColumnGroups() DataAwsQuicksightDataSetColumnGroupsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList">DataAwsQuicksightDataSetColumnGroupsList</a>

---

##### `ColumnLevelPermissionRules`<sup>Required</sup> <a name="ColumnLevelPermissionRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnLevelPermissionRules"></a>

```go
func ColumnLevelPermissionRules() DataAwsQuicksightDataSetColumnLevelPermissionRulesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList">DataAwsQuicksightDataSetColumnLevelPermissionRulesList</a>

---

##### `DataSetUsageConfiguration`<sup>Required</sup> <a name="DataSetUsageConfiguration" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetUsageConfiguration"></a>

```go
func DataSetUsageConfiguration() DataAwsQuicksightDataSetDataSetUsageConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList">DataAwsQuicksightDataSetDataSetUsageConfigurationList</a>

---

##### `FieldFolders`<sup>Required</sup> <a name="FieldFolders" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.fieldFolders"></a>

```go
func FieldFolders() DataAwsQuicksightDataSetFieldFoldersList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList">DataAwsQuicksightDataSetFieldFoldersList</a>

---

##### `ImportMode`<sup>Required</sup> <a name="ImportMode" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.importMode"></a>

```go
func ImportMode() *string
```

- *Type:* *string

---

##### `LogicalTableMap`<sup>Required</sup> <a name="LogicalTableMap" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.logicalTableMap"></a>

```go
func LogicalTableMap() DataAwsQuicksightDataSetLogicalTableMapList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList">DataAwsQuicksightDataSetLogicalTableMapList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.permissions"></a>

```go
func Permissions() DataAwsQuicksightDataSetPermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList">DataAwsQuicksightDataSetPermissionsList</a>

---

##### `PhysicalTableMap`<sup>Required</sup> <a name="PhysicalTableMap" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.physicalTableMap"></a>

```go
func PhysicalTableMap() DataAwsQuicksightDataSetPhysicalTableMapList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList">DataAwsQuicksightDataSetPhysicalTableMapList</a>

---

##### `RowLevelPermissionDataSet`<sup>Required</sup> <a name="RowLevelPermissionDataSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.rowLevelPermissionDataSet"></a>

```go
func RowLevelPermissionDataSet() DataAwsQuicksightDataSetRowLevelPermissionDataSetList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList">DataAwsQuicksightDataSetRowLevelPermissionDataSetList</a>

---

##### `RowLevelPermissionTagConfiguration`<sup>Required</sup> <a name="RowLevelPermissionTagConfiguration" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.rowLevelPermissionTagConfiguration"></a>

```go
func RowLevelPermissionTagConfiguration() DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList</a>

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `ColumnLevelPermissionRulesInput`<sup>Optional</sup> <a name="ColumnLevelPermissionRulesInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.columnLevelPermissionRulesInput"></a>

```go
func ColumnLevelPermissionRulesInput() interface{}
```

- *Type:* interface{}

---

##### `DataSetIdInput`<sup>Optional</sup> <a name="DataSetIdInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetIdInput"></a>

```go
func DataSetIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.dataSetId"></a>

```go
func DataSetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsQuicksightDataSetColumnGroups <a name="DataAwsQuicksightDataSetColumnGroups" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetColumnGroups {

}
```


### DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup <a name="DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup {

}
```


### DataAwsQuicksightDataSetColumnLevelPermissionRules <a name="DataAwsQuicksightDataSetColumnLevelPermissionRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetColumnLevelPermissionRules {

}
```


### DataAwsQuicksightDataSetConfig <a name="DataAwsQuicksightDataSetConfig" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataSetId: *string,
	AwsAccountId: *string,
	ColumnLevelPermissionRules: interface{},
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.dataSetId">DataSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/quicksight_data_set#data_set_id DataAwsQuicksightDataSet#data_set_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/quicksight_data_set#aws_account_id DataAwsQuicksightDataSet#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.columnLevelPermissionRules">ColumnLevelPermissionRules</a></code> | <code>interface{}</code> | column_level_permission_rules block. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/quicksight_data_set#id DataAwsQuicksightDataSet#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/quicksight_data_set#tags DataAwsQuicksightDataSet#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/quicksight_data_set#tags_all DataAwsQuicksightDataSet#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.dataSetId"></a>

```go
DataSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/quicksight_data_set#data_set_id DataAwsQuicksightDataSet#data_set_id}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/quicksight_data_set#aws_account_id DataAwsQuicksightDataSet#aws_account_id}.

---

##### `ColumnLevelPermissionRules`<sup>Optional</sup> <a name="ColumnLevelPermissionRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.columnLevelPermissionRules"></a>

```go
ColumnLevelPermissionRules interface{}
```

- *Type:* interface{}

column_level_permission_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/quicksight_data_set#column_level_permission_rules DataAwsQuicksightDataSet#column_level_permission_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/quicksight_data_set#id DataAwsQuicksightDataSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/quicksight_data_set#tags DataAwsQuicksightDataSet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/quicksight_data_set#tags_all DataAwsQuicksightDataSet#tags_all}.

---

### DataAwsQuicksightDataSetDataSetUsageConfiguration <a name="DataAwsQuicksightDataSetDataSetUsageConfiguration" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetDataSetUsageConfiguration {

}
```


### DataAwsQuicksightDataSetFieldFolders <a name="DataAwsQuicksightDataSetFieldFolders" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFolders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFolders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetFieldFolders {

}
```


### DataAwsQuicksightDataSetLogicalTableMap <a name="DataAwsQuicksightDataSetLogicalTableMap" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetLogicalTableMap {

}
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransforms <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransforms" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransforms.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetLogicalTableMapDataTransforms {

}
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation {

}
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation {

}
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns {

}
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation {

}
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation {

}
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation {

}
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation {

}
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags {

}
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription {

}
```


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation {

}
```


### DataAwsQuicksightDataSetLogicalTableMapSource <a name="DataAwsQuicksightDataSetLogicalTableMapSource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetLogicalTableMapSource {

}
```


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction {

}
```


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties {

}
```


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties {

}
```


### DataAwsQuicksightDataSetPermissions <a name="DataAwsQuicksightDataSetPermissions" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetPermissions {

}
```


### DataAwsQuicksightDataSetPhysicalTableMap <a name="DataAwsQuicksightDataSetPhysicalTableMap" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetPhysicalTableMap {

}
```


### DataAwsQuicksightDataSetPhysicalTableMapCustomSql <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSql" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSql.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetPhysicalTableMapCustomSql {

}
```


### DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns {

}
```


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTable <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTable" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetPhysicalTableMapRelationalTable {

}
```


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns {

}
```


### DataAwsQuicksightDataSetPhysicalTableMapS3Source <a name="DataAwsQuicksightDataSetPhysicalTableMapS3Source" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3Source"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3Source.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetPhysicalTableMapS3Source {

}
```


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns {

}
```


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings {

}
```


### DataAwsQuicksightDataSetRowLevelPermissionDataSet <a name="DataAwsQuicksightDataSetRowLevelPermissionDataSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetRowLevelPermissionDataSet {

}
```


### DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration {

}
```


### DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

&dataawsquicksightdataset.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList <a name="DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference <a name="DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columns">Columns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup">DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columns"></a>

```go
func Columns() *[]*string
```

- *Type:* *[]*string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup">DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

---


### DataAwsQuicksightDataSetColumnGroupsList <a name="DataAwsQuicksightDataSetColumnGroupsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetColumnGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetColumnGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetColumnGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetColumnGroupsOutputReference <a name="DataAwsQuicksightDataSetColumnGroupsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetColumnGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetColumnGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroup">GeoSpatialColumnGroup</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList">DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroups">DataAwsQuicksightDataSetColumnGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GeoSpatialColumnGroup`<sup>Required</sup> <a name="GeoSpatialColumnGroup" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroup"></a>

```go
func GeoSpatialColumnGroup() DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList">DataAwsQuicksightDataSetColumnGroupsGeoSpatialColumnGroupList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetColumnGroups
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnGroups">DataAwsQuicksightDataSetColumnGroups</a>

---


### DataAwsQuicksightDataSetColumnLevelPermissionRulesList <a name="DataAwsQuicksightDataSetColumnLevelPermissionRulesList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetColumnLevelPermissionRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetColumnLevelPermissionRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference <a name="DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principals">Principals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNames"></a>

```go
func ColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principals"></a>

```go
func Principals() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetColumnLevelPermissionRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsQuicksightDataSetDataSetUsageConfigurationList <a name="DataAwsQuicksightDataSetDataSetUsageConfigurationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetDataSetUsageConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetDataSetUsageConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference <a name="DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySource">DisableUseAsDirectQuerySource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSource">DisableUseAsImportedSource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfiguration">DataAwsQuicksightDataSetDataSetUsageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableUseAsDirectQuerySource`<sup>Required</sup> <a name="DisableUseAsDirectQuerySource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySource"></a>

```go
func DisableUseAsDirectQuerySource() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DisableUseAsImportedSource`<sup>Required</sup> <a name="DisableUseAsImportedSource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSource"></a>

```go
func DisableUseAsImportedSource() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetDataSetUsageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetDataSetUsageConfiguration">DataAwsQuicksightDataSetDataSetUsageConfiguration</a>

---


### DataAwsQuicksightDataSetFieldFoldersList <a name="DataAwsQuicksightDataSetFieldFoldersList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetFieldFoldersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetFieldFoldersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetFieldFoldersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetFieldFoldersOutputReference <a name="DataAwsQuicksightDataSetFieldFoldersOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetFieldFoldersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetFieldFoldersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.columns">Columns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.fieldFoldersId">FieldFoldersId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFolders">DataAwsQuicksightDataSetFieldFolders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.columns"></a>

```go
func Columns() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FieldFoldersId`<sup>Required</sup> <a name="FieldFoldersId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.fieldFoldersId"></a>

```go
func FieldFoldersId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFoldersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetFieldFolders
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetFieldFolders">DataAwsQuicksightDataSetFieldFolders</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnType">NewColumnType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `NewColumnType`<sup>Required</sup> <a name="NewColumnType" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnType"></a>

```go
func NewColumnType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnId">ColumnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnId`<sup>Required</sup> <a name="ColumnId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnId"></a>

```go
func ColumnId() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columns"></a>

```go
func Columns() DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpression">ConditionExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionExpression`<sup>Required</sup> <a name="ConditionExpression" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpression"></a>

```go
func ConditionExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperation">CastColumnTypeOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperation">CreateColumnsOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperation">FilterOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperation">ProjectOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperation">RenameColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperation">TagColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.untagColumnOperation">UntagColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransforms">DataAwsQuicksightDataSetLogicalTableMapDataTransforms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CastColumnTypeOperation`<sup>Required</sup> <a name="CastColumnTypeOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperation"></a>

```go
func CastColumnTypeOperation() DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationList</a>

---

##### `CreateColumnsOperation`<sup>Required</sup> <a name="CreateColumnsOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperation"></a>

```go
func CreateColumnsOperation() DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationList</a>

---

##### `FilterOperation`<sup>Required</sup> <a name="FilterOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperation"></a>

```go
func FilterOperation() DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsFilterOperationList</a>

---

##### `ProjectOperation`<sup>Required</sup> <a name="ProjectOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperation"></a>

```go
func ProjectOperation() DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList</a>

---

##### `RenameColumnOperation`<sup>Required</sup> <a name="RenameColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperation"></a>

```go
func RenameColumnOperation() DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList</a>

---

##### `TagColumnOperation`<sup>Required</sup> <a name="TagColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperation"></a>

```go
func TagColumnOperation() DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList</a>

---

##### `UntagColumnOperation`<sup>Required</sup> <a name="UntagColumnOperation" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.untagColumnOperation"></a>

```go
func UntagColumnOperation() DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetLogicalTableMapDataTransforms
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransforms">DataAwsQuicksightDataSetLogicalTableMapDataTransforms</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumns">ProjectedColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectedColumns`<sup>Required</sup> <a name="ProjectedColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumns"></a>

```go
func ProjectedColumns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnName">NewColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `NewColumnName`<sup>Required</sup> <a name="NewColumnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnName"></a>

```go
func NewColumnName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tags"></a>

```go
func Tags() DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescription">ColumnDescription</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRole">ColumnGeographicRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnDescription`<sup>Required</sup> <a name="ColumnDescription" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescription"></a>

```go
func ColumnDescription() DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionList</a>

---

##### `ColumnGeographicRole`<sup>Required</sup> <a name="ColumnGeographicRole" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRole"></a>

```go
func ColumnGeographicRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags">DataAwsQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags</a>

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.tagNames">TagNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `TagNames`<sup>Required</sup> <a name="TagNames" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.tagNames"></a>

```go
func TagNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">DataAwsQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a>

---


### DataAwsQuicksightDataSetLogicalTableMapList <a name="DataAwsQuicksightDataSetLogicalTableMapList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetLogicalTableMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetLogicalTableMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetLogicalTableMapOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetLogicalTableMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.dataTransforms">DataTransforms</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.logicalTableMapId">LogicalTableMapId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList">DataAwsQuicksightDataSetLogicalTableMapSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMap">DataAwsQuicksightDataSetLogicalTableMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `DataTransforms`<sup>Required</sup> <a name="DataTransforms" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.dataTransforms"></a>

```go
func DataTransforms() DataAwsQuicksightDataSetLogicalTableMapDataTransformsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapDataTransformsList">DataAwsQuicksightDataSetLogicalTableMapDataTransformsList</a>

---

##### `LogicalTableMapId`<sup>Required</sup> <a name="LogicalTableMapId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.logicalTableMapId"></a>

```go
func LogicalTableMapId() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.source"></a>

```go
func Source() DataAwsQuicksightDataSetLogicalTableMapSourceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList">DataAwsQuicksightDataSetLogicalTableMapSourceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetLogicalTableMap
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMap">DataAwsQuicksightDataSetLogicalTableMap</a>

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKey">UniqueKey</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKey"></a>

```go
func UniqueKey() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyProperties">LeftJoinKeyProperties</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperand">LeftOperand</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClause">OnClause</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyProperties">RightJoinKeyProperties</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperand">RightOperand</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LeftJoinKeyProperties`<sup>Required</sup> <a name="LeftJoinKeyProperties" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyProperties"></a>

```go
func LeftJoinKeyProperties() DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesList</a>

---

##### `LeftOperand`<sup>Required</sup> <a name="LeftOperand" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperand"></a>

```go
func LeftOperand() *string
```

- *Type:* *string

---

##### `OnClause`<sup>Required</sup> <a name="OnClause" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClause"></a>

```go
func OnClause() *string
```

- *Type:* *string

---

##### `RightJoinKeyProperties`<sup>Required</sup> <a name="RightJoinKeyProperties" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyProperties"></a>

```go
func RightJoinKeyProperties() DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList</a>

---

##### `RightOperand`<sup>Required</sup> <a name="RightOperand" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperand"></a>

```go
func RightOperand() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKey">UniqueKey</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKey"></a>

```go
func UniqueKey() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

---


### DataAwsQuicksightDataSetLogicalTableMapSourceList <a name="DataAwsQuicksightDataSetLogicalTableMapSourceList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetLogicalTableMapSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference <a name="DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetLogicalTableMapSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArn">DataSetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstruction">JoinInstruction</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableId">PhysicalTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSource">DataAwsQuicksightDataSetLogicalTableMapSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArn"></a>

```go
func DataSetArn() *string
```

- *Type:* *string

---

##### `JoinInstruction`<sup>Required</sup> <a name="JoinInstruction" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstruction"></a>

```go
func JoinInstruction() DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList">DataAwsQuicksightDataSetLogicalTableMapSourceJoinInstructionList</a>

---

##### `PhysicalTableId`<sup>Required</sup> <a name="PhysicalTableId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableId"></a>

```go
func PhysicalTableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetLogicalTableMapSource
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetLogicalTableMapSource">DataAwsQuicksightDataSetLogicalTableMapSource</a>

---


### DataAwsQuicksightDataSetPermissionsList <a name="DataAwsQuicksightDataSetPermissionsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetPermissionsOutputReference <a name="DataAwsQuicksightDataSetPermissionsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissions">DataAwsQuicksightDataSetPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetPermissions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPermissions">DataAwsQuicksightDataSetPermissions</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumns</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPhysicalTableMapCustomSqlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQuery">SqlQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSql">DataAwsQuicksightDataSetPhysicalTableMapCustomSql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columns"></a>

```go
func Columns() DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlColumnsList</a>

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArn"></a>

```go
func DataSourceArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SqlQuery`<sup>Required</sup> <a name="SqlQuery" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQuery"></a>

```go
func SqlQuery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetPhysicalTableMapCustomSql
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSql">DataAwsQuicksightDataSetPhysicalTableMapCustomSql</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapList <a name="DataAwsQuicksightDataSetPhysicalTableMapList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPhysicalTableMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetPhysicalTableMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetPhysicalTableMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetPhysicalTableMapOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPhysicalTableMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetPhysicalTableMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.customSql">CustomSql</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.physicalTableMapId">PhysicalTableMapId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.relationalTable">RelationalTable</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.s3Source">S3Source</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMap">DataAwsQuicksightDataSetPhysicalTableMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomSql`<sup>Required</sup> <a name="CustomSql" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.customSql"></a>

```go
func CustomSql() DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList">DataAwsQuicksightDataSetPhysicalTableMapCustomSqlList</a>

---

##### `PhysicalTableMapId`<sup>Required</sup> <a name="PhysicalTableMapId" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.physicalTableMapId"></a>

```go
func PhysicalTableMapId() *string
```

- *Type:* *string

---

##### `RelationalTable`<sup>Required</sup> <a name="RelationalTable" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.relationalTable"></a>

```go
func RelationalTable() DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList</a>

---

##### `S3Source`<sup>Required</sup> <a name="S3Source" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.s3Source"></a>

```go
func S3Source() DataAwsQuicksightDataSetPhysicalTableMapS3SourceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetPhysicalTableMap
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMap">DataAwsQuicksightDataSetPhysicalTableMap</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumns</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPhysicalTableMapRelationalTableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumns">InputColumns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTable">DataAwsQuicksightDataSetPhysicalTableMapRelationalTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArn"></a>

```go
func DataSourceArn() *string
```

- *Type:* *string

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumns"></a>

```go
func InputColumns() DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList">DataAwsQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetPhysicalTableMapRelationalTable
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapRelationalTable">DataAwsQuicksightDataSetPhysicalTableMapRelationalTable</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns">DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns">DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumns</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceList <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPhysicalTableMapS3SourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetPhysicalTableMapS3SourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumns">InputColumns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettings">UploadSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3Source">DataAwsQuicksightDataSetPhysicalTableMapS3Source</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArn"></a>

```go
func DataSourceArn() *string
```

- *Type:* *string

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumns"></a>

```go
func InputColumns() DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList</a>

---

##### `UploadSettings`<sup>Required</sup> <a name="UploadSettings" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettings"></a>

```go
func UploadSettings() DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList">DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetPhysicalTableMapS3Source
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3Source">DataAwsQuicksightDataSetPhysicalTableMapS3Source</a>

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference <a name="DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeader">ContainsHeader</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRow">StartFromRow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifier">TextQualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings">DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsHeader`<sup>Required</sup> <a name="ContainsHeader" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeader"></a>

```go
func ContainsHeader() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `StartFromRow`<sup>Required</sup> <a name="StartFromRow" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRow"></a>

```go
func StartFromRow() *f64
```

- *Type:* *f64

---

##### `TextQualifier`<sup>Required</sup> <a name="TextQualifier" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifier"></a>

```go
func TextQualifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings">DataAwsQuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

---


### DataAwsQuicksightDataSetRowLevelPermissionDataSetList <a name="DataAwsQuicksightDataSetRowLevelPermissionDataSetList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetRowLevelPermissionDataSetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetRowLevelPermissionDataSetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference <a name="DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersion">FormatVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicy">PermissionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSet">DataAwsQuicksightDataSetRowLevelPermissionDataSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FormatVersion`<sup>Required</sup> <a name="FormatVersion" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersion"></a>

```go
func FormatVersion() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PermissionPolicy`<sup>Required</sup> <a name="PermissionPolicy" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicy"></a>

```go
func PermissionPolicy() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetRowLevelPermissionDataSet
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionDataSet">DataAwsQuicksightDataSetRowLevelPermissionDataSet</a>

---


### DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.tagRules">TagRules</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration">DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TagRules`<sup>Required</sup> <a name="TagRules" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.tagRules"></a>

```go
func TagRules() DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration">DataAwsQuicksightDataSetRowLevelPermissionTagConfiguration</a>

---


### DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.get"></a>

```go
func Get(index *f64) DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference <a name="DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsquicksightdataset"

dataawsquicksightdataset.NewDataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.matchAllValue">MatchAllValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagMultiValueDelimiter">TagMultiValueDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `MatchAllValue`<sup>Required</sup> <a name="MatchAllValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.matchAllValue"></a>

```go
func MatchAllValue() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagMultiValueDelimiter`<sup>Required</sup> <a name="TagMultiValueDelimiter" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagMultiValueDelimiter"></a>

```go
func TagMultiValueDelimiter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsQuicksightDataSet.DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules">DataAwsQuicksightDataSetRowLevelPermissionTagConfigurationTagRules</a>

---



