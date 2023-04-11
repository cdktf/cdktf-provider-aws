# `quicksightDataSet` Submodule <a name="`quicksightDataSet` Submodule" id="@cdktf/provider-aws.quicksightDataSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightDataSet <a name="QuicksightDataSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set aws_quicksight_data_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSet(scope Construct, id *string, config QuicksightDataSetConfig) QuicksightDataSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig">QuicksightDataSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig">QuicksightDataSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putColumnGroups">PutColumnGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putColumnLevelPermissionRules">PutColumnLevelPermissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putDataSetUsageConfiguration">PutDataSetUsageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putFieldFolders">PutFieldFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putLogicalTableMap">PutLogicalTableMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putPhysicalTableMap">PutPhysicalTableMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionDataSet">PutRowLevelPermissionDataSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionTagConfiguration">PutRowLevelPermissionTagConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetColumnGroups">ResetColumnGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetColumnLevelPermissionRules">ResetColumnLevelPermissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetDataSetUsageConfiguration">ResetDataSetUsageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetFieldFolders">ResetFieldFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetLogicalTableMap">ResetLogicalTableMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetRowLevelPermissionDataSet">ResetRowLevelPermissionDataSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetRowLevelPermissionTagConfiguration">ResetRowLevelPermissionTagConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutColumnGroups` <a name="PutColumnGroups" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putColumnGroups"></a>

```go
func PutColumnGroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putColumnGroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutColumnLevelPermissionRules` <a name="PutColumnLevelPermissionRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putColumnLevelPermissionRules"></a>

```go
func PutColumnLevelPermissionRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putColumnLevelPermissionRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDataSetUsageConfiguration` <a name="PutDataSetUsageConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putDataSetUsageConfiguration"></a>

```go
func PutDataSetUsageConfiguration(value QuicksightDataSetDataSetUsageConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putDataSetUsageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

---

##### `PutFieldFolders` <a name="PutFieldFolders" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putFieldFolders"></a>

```go
func PutFieldFolders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putFieldFolders.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogicalTableMap` <a name="PutLogicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putLogicalTableMap"></a>

```go
func PutLogicalTableMap(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putLogicalTableMap.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putPermissions"></a>

```go
func PutPermissions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putPermissions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPhysicalTableMap` <a name="PutPhysicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putPhysicalTableMap"></a>

```go
func PutPhysicalTableMap(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putPhysicalTableMap.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRowLevelPermissionDataSet` <a name="PutRowLevelPermissionDataSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionDataSet"></a>

```go
func PutRowLevelPermissionDataSet(value QuicksightDataSetRowLevelPermissionDataSet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionDataSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

---

##### `PutRowLevelPermissionTagConfiguration` <a name="PutRowLevelPermissionTagConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionTagConfiguration"></a>

```go
func PutRowLevelPermissionTagConfiguration(value QuicksightDataSetRowLevelPermissionTagConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionTagConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration">QuicksightDataSetRowLevelPermissionTagConfiguration</a>

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

##### `ResetColumnGroups` <a name="ResetColumnGroups" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetColumnGroups"></a>

```go
func ResetColumnGroups()
```

##### `ResetColumnLevelPermissionRules` <a name="ResetColumnLevelPermissionRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetColumnLevelPermissionRules"></a>

```go
func ResetColumnLevelPermissionRules()
```

##### `ResetDataSetUsageConfiguration` <a name="ResetDataSetUsageConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetDataSetUsageConfiguration"></a>

```go
func ResetDataSetUsageConfiguration()
```

##### `ResetFieldFolders` <a name="ResetFieldFolders" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetFieldFolders"></a>

```go
func ResetFieldFolders()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetId"></a>

```go
func ResetId()
```

##### `ResetLogicalTableMap` <a name="ResetLogicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetLogicalTableMap"></a>

```go
func ResetLogicalTableMap()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetRowLevelPermissionDataSet` <a name="ResetRowLevelPermissionDataSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetRowLevelPermissionDataSet"></a>

```go
func ResetRowLevelPermissionDataSet()
```

##### `ResetRowLevelPermissionTagConfiguration` <a name="ResetRowLevelPermissionTagConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetRowLevelPermissionTagConfiguration"></a>

```go
func ResetRowLevelPermissionTagConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.QuicksightDataSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.QuicksightDataSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.QuicksightDataSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.columnGroups">ColumnGroups</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList">QuicksightDataSetColumnGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.columnLevelPermissionRules">ColumnLevelPermissionRules</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList">QuicksightDataSetColumnLevelPermissionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dataSetUsageConfiguration">DataSetUsageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference">QuicksightDataSetDataSetUsageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.fieldFolders">FieldFolders</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList">QuicksightDataSetFieldFoldersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.logicalTableMap">LogicalTableMap</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList">QuicksightDataSetLogicalTableMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList">QuicksightDataSetPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.physicalTableMap">PhysicalTableMap</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList">QuicksightDataSetPhysicalTableMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionDataSet">RowLevelPermissionDataSet</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference">QuicksightDataSetRowLevelPermissionDataSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionTagConfiguration">RowLevelPermissionTagConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference">QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.columnGroupsInput">ColumnGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.columnLevelPermissionRulesInput">ColumnLevelPermissionRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dataSetIdInput">DataSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dataSetUsageConfigurationInput">DataSetUsageConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.fieldFoldersInput">FieldFoldersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.importModeInput">ImportModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.logicalTableMapInput">LogicalTableMapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.permissionsInput">PermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.physicalTableMapInput">PhysicalTableMapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionDataSetInput">RowLevelPermissionDataSetInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionTagConfigurationInput">RowLevelPermissionTagConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration">QuicksightDataSetRowLevelPermissionTagConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dataSetId">DataSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.importMode">ImportMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ColumnGroups`<sup>Required</sup> <a name="ColumnGroups" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.columnGroups"></a>

```go
func ColumnGroups() QuicksightDataSetColumnGroupsList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList">QuicksightDataSetColumnGroupsList</a>

---

##### `ColumnLevelPermissionRules`<sup>Required</sup> <a name="ColumnLevelPermissionRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.columnLevelPermissionRules"></a>

```go
func ColumnLevelPermissionRules() QuicksightDataSetColumnLevelPermissionRulesList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList">QuicksightDataSetColumnLevelPermissionRulesList</a>

---

##### `DataSetUsageConfiguration`<sup>Required</sup> <a name="DataSetUsageConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dataSetUsageConfiguration"></a>

```go
func DataSetUsageConfiguration() QuicksightDataSetDataSetUsageConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference">QuicksightDataSetDataSetUsageConfigurationOutputReference</a>

---

##### `FieldFolders`<sup>Required</sup> <a name="FieldFolders" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.fieldFolders"></a>

```go
func FieldFolders() QuicksightDataSetFieldFoldersList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList">QuicksightDataSetFieldFoldersList</a>

---

##### `LogicalTableMap`<sup>Required</sup> <a name="LogicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.logicalTableMap"></a>

```go
func LogicalTableMap() QuicksightDataSetLogicalTableMapList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList">QuicksightDataSetLogicalTableMapList</a>

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.permissions"></a>

```go
func Permissions() QuicksightDataSetPermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList">QuicksightDataSetPermissionsList</a>

---

##### `PhysicalTableMap`<sup>Required</sup> <a name="PhysicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.physicalTableMap"></a>

```go
func PhysicalTableMap() QuicksightDataSetPhysicalTableMapList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList">QuicksightDataSetPhysicalTableMapList</a>

---

##### `RowLevelPermissionDataSet`<sup>Required</sup> <a name="RowLevelPermissionDataSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionDataSet"></a>

```go
func RowLevelPermissionDataSet() QuicksightDataSetRowLevelPermissionDataSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference">QuicksightDataSetRowLevelPermissionDataSetOutputReference</a>

---

##### `RowLevelPermissionTagConfiguration`<sup>Required</sup> <a name="RowLevelPermissionTagConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionTagConfiguration"></a>

```go
func RowLevelPermissionTagConfiguration() QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference">QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference</a>

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `ColumnGroupsInput`<sup>Optional</sup> <a name="ColumnGroupsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.columnGroupsInput"></a>

```go
func ColumnGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `ColumnLevelPermissionRulesInput`<sup>Optional</sup> <a name="ColumnLevelPermissionRulesInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.columnLevelPermissionRulesInput"></a>

```go
func ColumnLevelPermissionRulesInput() interface{}
```

- *Type:* interface{}

---

##### `DataSetIdInput`<sup>Optional</sup> <a name="DataSetIdInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dataSetIdInput"></a>

```go
func DataSetIdInput() *string
```

- *Type:* *string

---

##### `DataSetUsageConfigurationInput`<sup>Optional</sup> <a name="DataSetUsageConfigurationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dataSetUsageConfigurationInput"></a>

```go
func DataSetUsageConfigurationInput() QuicksightDataSetDataSetUsageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

---

##### `FieldFoldersInput`<sup>Optional</sup> <a name="FieldFoldersInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.fieldFoldersInput"></a>

```go
func FieldFoldersInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportModeInput`<sup>Optional</sup> <a name="ImportModeInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.importModeInput"></a>

```go
func ImportModeInput() *string
```

- *Type:* *string

---

##### `LogicalTableMapInput`<sup>Optional</sup> <a name="LogicalTableMapInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.logicalTableMapInput"></a>

```go
func LogicalTableMapInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.permissionsInput"></a>

```go
func PermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `PhysicalTableMapInput`<sup>Optional</sup> <a name="PhysicalTableMapInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.physicalTableMapInput"></a>

```go
func PhysicalTableMapInput() interface{}
```

- *Type:* interface{}

---

##### `RowLevelPermissionDataSetInput`<sup>Optional</sup> <a name="RowLevelPermissionDataSetInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionDataSetInput"></a>

```go
func RowLevelPermissionDataSetInput() QuicksightDataSetRowLevelPermissionDataSet
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

---

##### `RowLevelPermissionTagConfigurationInput`<sup>Optional</sup> <a name="RowLevelPermissionTagConfigurationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionTagConfigurationInput"></a>

```go
func RowLevelPermissionTagConfigurationInput() QuicksightDataSetRowLevelPermissionTagConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration">QuicksightDataSetRowLevelPermissionTagConfiguration</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dataSetId"></a>

```go
func DataSetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportMode`<sup>Required</sup> <a name="ImportMode" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.importMode"></a>

```go
func ImportMode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightDataSetColumnGroups <a name="QuicksightDataSetColumnGroups" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetColumnGroups {
	GeoSpatialColumnGroup: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroups.property.geoSpatialColumnGroup">GeoSpatialColumnGroup</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a></code> | geo_spatial_column_group block. |

---

##### `GeoSpatialColumnGroup`<sup>Optional</sup> <a name="GeoSpatialColumnGroup" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroups.property.geoSpatialColumnGroup"></a>

```go
GeoSpatialColumnGroup QuicksightDataSetColumnGroupsGeoSpatialColumnGroup
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

geo_spatial_column_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#geo_spatial_column_group QuicksightDataSet#geo_spatial_column_group}

---

### QuicksightDataSetColumnGroupsGeoSpatialColumnGroup <a name="QuicksightDataSetColumnGroupsGeoSpatialColumnGroup" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup {
	Columns: *[]*string,
	CountryCode: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.columns">Columns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#columns QuicksightDataSet#columns}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.countryCode">CountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#country_code QuicksightDataSet#country_code}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#name QuicksightDataSet#name}. |

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.columns"></a>

```go
Columns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#columns QuicksightDataSet#columns}.

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#country_code QuicksightDataSet#country_code}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#name QuicksightDataSet#name}.

---

### QuicksightDataSetColumnLevelPermissionRules <a name="QuicksightDataSetColumnLevelPermissionRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetColumnLevelPermissionRules {
	ColumnNames: *[]*string,
	Principals: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_names QuicksightDataSet#column_names}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.property.principals">Principals</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#principals QuicksightDataSet#principals}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.property.columnNames"></a>

```go
ColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_names QuicksightDataSet#column_names}.

---

##### `Principals`<sup>Optional</sup> <a name="Principals" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.property.principals"></a>

```go
Principals *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#principals QuicksightDataSet#principals}.

---

### QuicksightDataSetConfig <a name="QuicksightDataSetConfig" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataSetId: *string,
	ImportMode: *string,
	Name: *string,
	PhysicalTableMap: interface{},
	AwsAccountId: *string,
	ColumnGroups: interface{},
	ColumnLevelPermissionRules: interface{},
	DataSetUsageConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration,
	FieldFolders: interface{},
	Id: *string,
	LogicalTableMap: interface{},
	Permissions: interface{},
	RowLevelPermissionDataSet: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet,
	RowLevelPermissionTagConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.dataSetId">DataSetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#data_set_id QuicksightDataSet#data_set_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.importMode">ImportMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#import_mode QuicksightDataSet#import_mode}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#name QuicksightDataSet#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.physicalTableMap">PhysicalTableMap</a></code> | <code>interface{}</code> | physical_table_map block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#aws_account_id QuicksightDataSet#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.columnGroups">ColumnGroups</a></code> | <code>interface{}</code> | column_groups block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.columnLevelPermissionRules">ColumnLevelPermissionRules</a></code> | <code>interface{}</code> | column_level_permission_rules block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.dataSetUsageConfiguration">DataSetUsageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a></code> | data_set_usage_configuration block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.fieldFolders">FieldFolders</a></code> | <code>interface{}</code> | field_folders block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#id QuicksightDataSet#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.logicalTableMap">LogicalTableMap</a></code> | <code>interface{}</code> | logical_table_map block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.permissions">Permissions</a></code> | <code>interface{}</code> | permissions block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.rowLevelPermissionDataSet">RowLevelPermissionDataSet</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a></code> | row_level_permission_data_set block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.rowLevelPermissionTagConfiguration">RowLevelPermissionTagConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration">QuicksightDataSetRowLevelPermissionTagConfiguration</a></code> | row_level_permission_tag_configuration block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#tags QuicksightDataSet#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#tags_all QuicksightDataSet#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.dataSetId"></a>

```go
DataSetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#data_set_id QuicksightDataSet#data_set_id}.

---

##### `ImportMode`<sup>Required</sup> <a name="ImportMode" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.importMode"></a>

```go
ImportMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#import_mode QuicksightDataSet#import_mode}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#name QuicksightDataSet#name}.

---

##### `PhysicalTableMap`<sup>Required</sup> <a name="PhysicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.physicalTableMap"></a>

```go
PhysicalTableMap interface{}
```

- *Type:* interface{}

physical_table_map block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#physical_table_map QuicksightDataSet#physical_table_map}

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#aws_account_id QuicksightDataSet#aws_account_id}.

---

##### `ColumnGroups`<sup>Optional</sup> <a name="ColumnGroups" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.columnGroups"></a>

```go
ColumnGroups interface{}
```

- *Type:* interface{}

column_groups block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_groups QuicksightDataSet#column_groups}

---

##### `ColumnLevelPermissionRules`<sup>Optional</sup> <a name="ColumnLevelPermissionRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.columnLevelPermissionRules"></a>

```go
ColumnLevelPermissionRules interface{}
```

- *Type:* interface{}

column_level_permission_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_level_permission_rules QuicksightDataSet#column_level_permission_rules}

---

##### `DataSetUsageConfiguration`<sup>Optional</sup> <a name="DataSetUsageConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.dataSetUsageConfiguration"></a>

```go
DataSetUsageConfiguration QuicksightDataSetDataSetUsageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

data_set_usage_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#data_set_usage_configuration QuicksightDataSet#data_set_usage_configuration}

---

##### `FieldFolders`<sup>Optional</sup> <a name="FieldFolders" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.fieldFolders"></a>

```go
FieldFolders interface{}
```

- *Type:* interface{}

field_folders block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#field_folders QuicksightDataSet#field_folders}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#id QuicksightDataSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogicalTableMap`<sup>Optional</sup> <a name="LogicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.logicalTableMap"></a>

```go
LogicalTableMap interface{}
```

- *Type:* interface{}

logical_table_map block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#logical_table_map QuicksightDataSet#logical_table_map}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.permissions"></a>

```go
Permissions interface{}
```

- *Type:* interface{}

permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#permissions QuicksightDataSet#permissions}

---

##### `RowLevelPermissionDataSet`<sup>Optional</sup> <a name="RowLevelPermissionDataSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.rowLevelPermissionDataSet"></a>

```go
RowLevelPermissionDataSet QuicksightDataSetRowLevelPermissionDataSet
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

row_level_permission_data_set block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#row_level_permission_data_set QuicksightDataSet#row_level_permission_data_set}

---

##### `RowLevelPermissionTagConfiguration`<sup>Optional</sup> <a name="RowLevelPermissionTagConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.rowLevelPermissionTagConfiguration"></a>

```go
RowLevelPermissionTagConfiguration QuicksightDataSetRowLevelPermissionTagConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration">QuicksightDataSetRowLevelPermissionTagConfiguration</a>

row_level_permission_tag_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#row_level_permission_tag_configuration QuicksightDataSet#row_level_permission_tag_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#tags QuicksightDataSet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#tags_all QuicksightDataSet#tags_all}.

---

### QuicksightDataSetDataSetUsageConfiguration <a name="QuicksightDataSetDataSetUsageConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetDataSetUsageConfiguration {
	DisableUseAsDirectQuerySource: interface{},
	DisableUseAsImportedSource: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.property.disableUseAsDirectQuerySource">DisableUseAsDirectQuerySource</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#disable_use_as_direct_query_source QuicksightDataSet#disable_use_as_direct_query_source}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.property.disableUseAsImportedSource">DisableUseAsImportedSource</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#disable_use_as_imported_source QuicksightDataSet#disable_use_as_imported_source}. |

---

##### `DisableUseAsDirectQuerySource`<sup>Optional</sup> <a name="DisableUseAsDirectQuerySource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.property.disableUseAsDirectQuerySource"></a>

```go
DisableUseAsDirectQuerySource interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#disable_use_as_direct_query_source QuicksightDataSet#disable_use_as_direct_query_source}.

---

##### `DisableUseAsImportedSource`<sup>Optional</sup> <a name="DisableUseAsImportedSource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.property.disableUseAsImportedSource"></a>

```go
DisableUseAsImportedSource interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#disable_use_as_imported_source QuicksightDataSet#disable_use_as_imported_source}.

---

### QuicksightDataSetFieldFolders <a name="QuicksightDataSetFieldFolders" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFolders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFolders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetFieldFolders {
	FieldFoldersId: *string,
	Columns: *[]*string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFolders.property.fieldFoldersId">FieldFoldersId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#field_folders_id QuicksightDataSet#field_folders_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFolders.property.columns">Columns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#columns QuicksightDataSet#columns}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFolders.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#description QuicksightDataSet#description}. |

---

##### `FieldFoldersId`<sup>Required</sup> <a name="FieldFoldersId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFolders.property.fieldFoldersId"></a>

```go
FieldFoldersId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#field_folders_id QuicksightDataSet#field_folders_id}.

---

##### `Columns`<sup>Optional</sup> <a name="Columns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFolders.property.columns"></a>

```go
Columns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#columns QuicksightDataSet#columns}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFolders.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#description QuicksightDataSet#description}.

---

### QuicksightDataSetLogicalTableMap <a name="QuicksightDataSetLogicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetLogicalTableMap {
	Alias: *string,
	LogicalTableMapId: *string,
	Source: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource,
	DataTransforms: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.alias">Alias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#alias QuicksightDataSet#alias}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.logicalTableMapId">LogicalTableMapId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#logical_table_map_id QuicksightDataSet#logical_table_map_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.dataTransforms">DataTransforms</a></code> | <code>interface{}</code> | data_transforms block. |

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#alias QuicksightDataSet#alias}.

---

##### `LogicalTableMapId`<sup>Required</sup> <a name="LogicalTableMapId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.logicalTableMapId"></a>

```go
LogicalTableMapId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#logical_table_map_id QuicksightDataSet#logical_table_map_id}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.source"></a>

```go
Source QuicksightDataSetLogicalTableMapSource
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#source QuicksightDataSet#source}

---

##### `DataTransforms`<sup>Optional</sup> <a name="DataTransforms" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.dataTransforms"></a>

```go
DataTransforms interface{}
```

- *Type:* interface{}

data_transforms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#data_transforms QuicksightDataSet#data_transforms}

---

### QuicksightDataSetLogicalTableMapDataTransforms <a name="QuicksightDataSetLogicalTableMapDataTransforms" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetLogicalTableMapDataTransforms {
	CastColumnTypeOperation: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation,
	CreateColumnsOperation: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation,
	FilterOperation: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation,
	ProjectOperation: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation,
	RenameColumnOperation: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation,
	TagColumnOperation: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation,
	UntagColumnOperation: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.castColumnTypeOperation">CastColumnTypeOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a></code> | cast_column_type_operation block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.createColumnsOperation">CreateColumnsOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a></code> | create_columns_operation block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.filterOperation">FilterOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a></code> | filter_operation block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.projectOperation">ProjectOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a></code> | project_operation block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.renameColumnOperation">RenameColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a></code> | rename_column_operation block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.tagColumnOperation">TagColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a></code> | tag_column_operation block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.untagColumnOperation">UntagColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a></code> | untag_column_operation block. |

---

##### `CastColumnTypeOperation`<sup>Optional</sup> <a name="CastColumnTypeOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.castColumnTypeOperation"></a>

```go
CastColumnTypeOperation QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

cast_column_type_operation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#cast_column_type_operation QuicksightDataSet#cast_column_type_operation}

---

##### `CreateColumnsOperation`<sup>Optional</sup> <a name="CreateColumnsOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.createColumnsOperation"></a>

```go
CreateColumnsOperation QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

create_columns_operation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#create_columns_operation QuicksightDataSet#create_columns_operation}

---

##### `FilterOperation`<sup>Optional</sup> <a name="FilterOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.filterOperation"></a>

```go
FilterOperation QuicksightDataSetLogicalTableMapDataTransformsFilterOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

filter_operation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#filter_operation QuicksightDataSet#filter_operation}

---

##### `ProjectOperation`<sup>Optional</sup> <a name="ProjectOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.projectOperation"></a>

```go
ProjectOperation QuicksightDataSetLogicalTableMapDataTransformsProjectOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

project_operation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#project_operation QuicksightDataSet#project_operation}

---

##### `RenameColumnOperation`<sup>Optional</sup> <a name="RenameColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.renameColumnOperation"></a>

```go
RenameColumnOperation QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

rename_column_operation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#rename_column_operation QuicksightDataSet#rename_column_operation}

---

##### `TagColumnOperation`<sup>Optional</sup> <a name="TagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.tagColumnOperation"></a>

```go
TagColumnOperation QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

tag_column_operation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#tag_column_operation QuicksightDataSet#tag_column_operation}

---

##### `UntagColumnOperation`<sup>Optional</sup> <a name="UntagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.untagColumnOperation"></a>

```go
UntagColumnOperation QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a>

untag_column_operation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#untag_column_operation QuicksightDataSet#untag_column_operation}

---

### QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation {
	ColumnName: *string,
	NewColumnType: *string,
	Format: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_name QuicksightDataSet#column_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.newColumnType">NewColumnType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#new_column_type QuicksightDataSet#new_column_type}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#format QuicksightDataSet#format}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_name QuicksightDataSet#column_name}.

---

##### `NewColumnType`<sup>Required</sup> <a name="NewColumnType" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.newColumnType"></a>

```go
NewColumnType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#new_column_type QuicksightDataSet#new_column_type}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#format QuicksightDataSet#format}.

---

### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation {
	Columns: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation.property.columns">Columns</a></code> | <code>interface{}</code> | columns block. |

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation.property.columns"></a>

```go
Columns interface{}
```

- *Type:* interface{}

columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#columns QuicksightDataSet#columns}

---

### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns {
	ColumnId: *string,
	ColumnName: *string,
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.columnId">ColumnId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_id QuicksightDataSet#column_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_name QuicksightDataSet#column_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#expression QuicksightDataSet#expression}. |

---

##### `ColumnId`<sup>Required</sup> <a name="ColumnId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.columnId"></a>

```go
ColumnId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_id QuicksightDataSet#column_id}.

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_name QuicksightDataSet#column_name}.

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#expression QuicksightDataSet#expression}.

---

### QuicksightDataSetLogicalTableMapDataTransformsFilterOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsFilterOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation {
	ConditionExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation.property.conditionExpression">ConditionExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#condition_expression QuicksightDataSet#condition_expression}. |

---

##### `ConditionExpression`<sup>Required</sup> <a name="ConditionExpression" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation.property.conditionExpression"></a>

```go
ConditionExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#condition_expression QuicksightDataSet#condition_expression}.

---

### QuicksightDataSetLogicalTableMapDataTransformsProjectOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsProjectOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation {
	ProjectedColumns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation.property.projectedColumns">ProjectedColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#projected_columns QuicksightDataSet#projected_columns}. |

---

##### `ProjectedColumns`<sup>Required</sup> <a name="ProjectedColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation.property.projectedColumns"></a>

```go
ProjectedColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#projected_columns QuicksightDataSet#projected_columns}.

---

### QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation {
	ColumnName: *string,
	NewColumnName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_name QuicksightDataSet#column_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.property.newColumnName">NewColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#new_column_name QuicksightDataSet#new_column_name}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_name QuicksightDataSet#column_name}.

---

##### `NewColumnName`<sup>Required</sup> <a name="NewColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.property.newColumnName"></a>

```go
NewColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#new_column_name QuicksightDataSet#new_column_name}.

---

### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation {
	ColumnName: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_name QuicksightDataSet#column_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_name QuicksightDataSet#column_name}.

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#tags QuicksightDataSet#tags}

---

### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags {
	ColumnDescription: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription,
	ColumnGeographicRole: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.property.columnDescription">ColumnDescription</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a></code> | column_description block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.property.columnGeographicRole">ColumnGeographicRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_geographic_role QuicksightDataSet#column_geographic_role}. |

---

##### `ColumnDescription`<sup>Optional</sup> <a name="ColumnDescription" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.property.columnDescription"></a>

```go
ColumnDescription QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

column_description block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_description QuicksightDataSet#column_description}

---

##### `ColumnGeographicRole`<sup>Optional</sup> <a name="ColumnGeographicRole" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.property.columnGeographicRole"></a>

```go
ColumnGeographicRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_geographic_role QuicksightDataSet#column_geographic_role}.

---

### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription {
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription.property.text">Text</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#text QuicksightDataSet#text}. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription.property.text"></a>

```go
Text *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#text QuicksightDataSet#text}.

---

### QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation {
	ColumnName: *string,
	TagNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_name QuicksightDataSet#column_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation.property.tagNames">TagNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#tag_names QuicksightDataSet#tag_names}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_name QuicksightDataSet#column_name}.

---

##### `TagNames`<sup>Required</sup> <a name="TagNames" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation.property.tagNames"></a>

```go
TagNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#tag_names QuicksightDataSet#tag_names}.

---

### QuicksightDataSetLogicalTableMapSource <a name="QuicksightDataSetLogicalTableMapSource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetLogicalTableMapSource {
	DataSetArn: *string,
	JoinInstruction: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction,
	PhysicalTableId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.dataSetArn">DataSetArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#data_set_arn QuicksightDataSet#data_set_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.joinInstruction">JoinInstruction</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a></code> | join_instruction block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.physicalTableId">PhysicalTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#physical_table_id QuicksightDataSet#physical_table_id}. |

---

##### `DataSetArn`<sup>Optional</sup> <a name="DataSetArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.dataSetArn"></a>

```go
DataSetArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#data_set_arn QuicksightDataSet#data_set_arn}.

---

##### `JoinInstruction`<sup>Optional</sup> <a name="JoinInstruction" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.joinInstruction"></a>

```go
JoinInstruction QuicksightDataSetLogicalTableMapSourceJoinInstruction
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

join_instruction block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#join_instruction QuicksightDataSet#join_instruction}

---

##### `PhysicalTableId`<sup>Optional</sup> <a name="PhysicalTableId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.physicalTableId"></a>

```go
PhysicalTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#physical_table_id QuicksightDataSet#physical_table_id}.

---

### QuicksightDataSetLogicalTableMapSourceJoinInstruction <a name="QuicksightDataSetLogicalTableMapSourceJoinInstruction" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetLogicalTableMapSourceJoinInstruction {
	LeftOperand: *string,
	OnClause: *string,
	RightOperand: *string,
	Type: *string,
	LeftJoinKeyProperties: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties,
	RightJoinKeyProperties: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.leftOperand">LeftOperand</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#left_operand QuicksightDataSet#left_operand}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.onClause">OnClause</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#on_clause QuicksightDataSet#on_clause}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.rightOperand">RightOperand</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#right_operand QuicksightDataSet#right_operand}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#type QuicksightDataSet#type}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.leftJoinKeyProperties">LeftJoinKeyProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a></code> | left_join_key_properties block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.rightJoinKeyProperties">RightJoinKeyProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a></code> | right_join_key_properties block. |

---

##### `LeftOperand`<sup>Required</sup> <a name="LeftOperand" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.leftOperand"></a>

```go
LeftOperand *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#left_operand QuicksightDataSet#left_operand}.

---

##### `OnClause`<sup>Required</sup> <a name="OnClause" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.onClause"></a>

```go
OnClause *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#on_clause QuicksightDataSet#on_clause}.

---

##### `RightOperand`<sup>Required</sup> <a name="RightOperand" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.rightOperand"></a>

```go
RightOperand *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#right_operand QuicksightDataSet#right_operand}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#type QuicksightDataSet#type}.

---

##### `LeftJoinKeyProperties`<sup>Optional</sup> <a name="LeftJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.leftJoinKeyProperties"></a>

```go
LeftJoinKeyProperties QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

left_join_key_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#left_join_key_properties QuicksightDataSet#left_join_key_properties}

---

##### `RightJoinKeyProperties`<sup>Optional</sup> <a name="RightJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.rightJoinKeyProperties"></a>

```go
RightJoinKeyProperties QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

right_join_key_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#right_join_key_properties QuicksightDataSet#right_join_key_properties}

---

### QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties {
	UniqueKey: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties.property.uniqueKey">UniqueKey</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#unique_key QuicksightDataSet#unique_key}. |

---

##### `UniqueKey`<sup>Optional</sup> <a name="UniqueKey" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties.property.uniqueKey"></a>

```go
UniqueKey interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#unique_key QuicksightDataSet#unique_key}.

---

### QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties {
	UniqueKey: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties.property.uniqueKey">UniqueKey</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#unique_key QuicksightDataSet#unique_key}. |

---

##### `UniqueKey`<sup>Optional</sup> <a name="UniqueKey" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties.property.uniqueKey"></a>

```go
UniqueKey interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#unique_key QuicksightDataSet#unique_key}.

---

### QuicksightDataSetPermissions <a name="QuicksightDataSetPermissions" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetPermissions {
	Actions: *[]*string,
	Principal: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissions.property.actions">Actions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#actions QuicksightDataSet#actions}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissions.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#principal QuicksightDataSet#principal}. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissions.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#actions QuicksightDataSet#actions}.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissions.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#principal QuicksightDataSet#principal}.

---

### QuicksightDataSetPhysicalTableMap <a name="QuicksightDataSetPhysicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetPhysicalTableMap {
	PhysicalTableMapId: *string,
	CustomSql: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql,
	RelationalTable: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable,
	S3Source: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.physicalTableMapId">PhysicalTableMapId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#physical_table_map_id QuicksightDataSet#physical_table_map_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.customSql">CustomSql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a></code> | custom_sql block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.relationalTable">RelationalTable</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a></code> | relational_table block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.s3Source">S3Source</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a></code> | s3_source block. |

---

##### `PhysicalTableMapId`<sup>Required</sup> <a name="PhysicalTableMapId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.physicalTableMapId"></a>

```go
PhysicalTableMapId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#physical_table_map_id QuicksightDataSet#physical_table_map_id}.

---

##### `CustomSql`<sup>Optional</sup> <a name="CustomSql" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.customSql"></a>

```go
CustomSql QuicksightDataSetPhysicalTableMapCustomSql
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a>

custom_sql block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#custom_sql QuicksightDataSet#custom_sql}

---

##### `RelationalTable`<sup>Optional</sup> <a name="RelationalTable" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.relationalTable"></a>

```go
RelationalTable QuicksightDataSetPhysicalTableMapRelationalTable
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a>

relational_table block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#relational_table QuicksightDataSet#relational_table}

---

##### `S3Source`<sup>Optional</sup> <a name="S3Source" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.s3Source"></a>

```go
S3Source QuicksightDataSetPhysicalTableMapS3Source
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a>

s3_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#s3_source QuicksightDataSet#s3_source}

---

### QuicksightDataSetPhysicalTableMapCustomSql <a name="QuicksightDataSetPhysicalTableMapCustomSql" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetPhysicalTableMapCustomSql {
	DataSourceArn: *string,
	Name: *string,
	SqlQuery: *string,
	Columns: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#name QuicksightDataSet#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.sqlQuery">SqlQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#sql_query QuicksightDataSet#sql_query}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.columns">Columns</a></code> | <code>interface{}</code> | columns block. |

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.dataSourceArn"></a>

```go
DataSourceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#name QuicksightDataSet#name}.

---

##### `SqlQuery`<sup>Required</sup> <a name="SqlQuery" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.sqlQuery"></a>

```go
SqlQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#sql_query QuicksightDataSet#sql_query}.

---

##### `Columns`<sup>Optional</sup> <a name="Columns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.columns"></a>

```go
Columns interface{}
```

- *Type:* interface{}

columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#columns QuicksightDataSet#columns}

---

### QuicksightDataSetPhysicalTableMapCustomSqlColumns <a name="QuicksightDataSetPhysicalTableMapCustomSqlColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetPhysicalTableMapCustomSqlColumns {
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#name QuicksightDataSet#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#type QuicksightDataSet#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#name QuicksightDataSet#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#type QuicksightDataSet#type}.

---

### QuicksightDataSetPhysicalTableMapRelationalTable <a name="QuicksightDataSetPhysicalTableMapRelationalTable" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetPhysicalTableMapRelationalTable {
	DataSourceArn: *string,
	InputColumns: interface{},
	Name: *string,
	Catalog: *string,
	Schema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.inputColumns">InputColumns</a></code> | <code>interface{}</code> | input_columns block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#name QuicksightDataSet#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.catalog">Catalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#catalog QuicksightDataSet#catalog}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.schema">Schema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#schema QuicksightDataSet#schema}. |

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.dataSourceArn"></a>

```go
DataSourceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}.

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.inputColumns"></a>

```go
InputColumns interface{}
```

- *Type:* interface{}

input_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#input_columns QuicksightDataSet#input_columns}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#name QuicksightDataSet#name}.

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#catalog QuicksightDataSet#catalog}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#schema QuicksightDataSet#schema}.

---

### QuicksightDataSetPhysicalTableMapRelationalTableInputColumns <a name="QuicksightDataSetPhysicalTableMapRelationalTableInputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns {
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#name QuicksightDataSet#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#type QuicksightDataSet#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#name QuicksightDataSet#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#type QuicksightDataSet#type}.

---

### QuicksightDataSetPhysicalTableMapS3Source <a name="QuicksightDataSetPhysicalTableMapS3Source" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetPhysicalTableMapS3Source {
	DataSourceArn: *string,
	InputColumns: interface{},
	UploadSettings: github.com/cdktf/cdktf-provider-aws-go/aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.inputColumns">InputColumns</a></code> | <code>interface{}</code> | input_columns block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.uploadSettings">UploadSettings</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a></code> | upload_settings block. |

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.dataSourceArn"></a>

```go
DataSourceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}.

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.inputColumns"></a>

```go
InputColumns interface{}
```

- *Type:* interface{}

input_columns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#input_columns QuicksightDataSet#input_columns}

---

##### `UploadSettings`<sup>Required</sup> <a name="UploadSettings" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.uploadSettings"></a>

```go
UploadSettings QuicksightDataSetPhysicalTableMapS3SourceUploadSettings
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

upload_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#upload_settings QuicksightDataSet#upload_settings}

---

### QuicksightDataSetPhysicalTableMapS3SourceInputColumns <a name="QuicksightDataSetPhysicalTableMapS3SourceInputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetPhysicalTableMapS3SourceInputColumns {
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#name QuicksightDataSet#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#type QuicksightDataSet#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#name QuicksightDataSet#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#type QuicksightDataSet#type}.

---

### QuicksightDataSetPhysicalTableMapS3SourceUploadSettings <a name="QuicksightDataSetPhysicalTableMapS3SourceUploadSettings" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings {
	ContainsHeader: interface{},
	Delimiter: *string,
	Format: *string,
	StartFromRow: *f64,
	TextQualifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.containsHeader">ContainsHeader</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#contains_header QuicksightDataSet#contains_header}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.delimiter">Delimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#delimiter QuicksightDataSet#delimiter}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#format QuicksightDataSet#format}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.startFromRow">StartFromRow</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#start_from_row QuicksightDataSet#start_from_row}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.textQualifier">TextQualifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#text_qualifier QuicksightDataSet#text_qualifier}. |

---

##### `ContainsHeader`<sup>Optional</sup> <a name="ContainsHeader" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.containsHeader"></a>

```go
ContainsHeader interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#contains_header QuicksightDataSet#contains_header}.

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#delimiter QuicksightDataSet#delimiter}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#format QuicksightDataSet#format}.

---

##### `StartFromRow`<sup>Optional</sup> <a name="StartFromRow" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.startFromRow"></a>

```go
StartFromRow *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#start_from_row QuicksightDataSet#start_from_row}.

---

##### `TextQualifier`<sup>Optional</sup> <a name="TextQualifier" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.textQualifier"></a>

```go
TextQualifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#text_qualifier QuicksightDataSet#text_qualifier}.

---

### QuicksightDataSetRowLevelPermissionDataSet <a name="QuicksightDataSetRowLevelPermissionDataSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetRowLevelPermissionDataSet {
	Arn: *string,
	PermissionPolicy: *string,
	FormatVersion: *string,
	Namespace: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#arn QuicksightDataSet#arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.permissionPolicy">PermissionPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#permission_policy QuicksightDataSet#permission_policy}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.formatVersion">FormatVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#format_version QuicksightDataSet#format_version}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#namespace QuicksightDataSet#namespace}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#status QuicksightDataSet#status}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#arn QuicksightDataSet#arn}.

---

##### `PermissionPolicy`<sup>Required</sup> <a name="PermissionPolicy" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.permissionPolicy"></a>

```go
PermissionPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#permission_policy QuicksightDataSet#permission_policy}.

---

##### `FormatVersion`<sup>Optional</sup> <a name="FormatVersion" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.formatVersion"></a>

```go
FormatVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#format_version QuicksightDataSet#format_version}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#namespace QuicksightDataSet#namespace}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#status QuicksightDataSet#status}.

---

### QuicksightDataSetRowLevelPermissionTagConfiguration <a name="QuicksightDataSetRowLevelPermissionTagConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetRowLevelPermissionTagConfiguration {
	TagRules: interface{},
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration.property.tagRules">TagRules</a></code> | <code>interface{}</code> | tag_rules block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#status QuicksightDataSet#status}. |

---

##### `TagRules`<sup>Required</sup> <a name="TagRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration.property.tagRules"></a>

```go
TagRules interface{}
```

- *Type:* interface{}

tag_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#tag_rules QuicksightDataSet#tag_rules}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#status QuicksightDataSet#status}.

---

### QuicksightDataSetRowLevelPermissionTagConfigurationTagRules <a name="QuicksightDataSetRowLevelPermissionTagConfigurationTagRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

&quicksightdataset.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules {
	ColumnName: *string,
	TagKey: *string,
	MatchAllValue: *string,
	TagMultiValueDelimiter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_name QuicksightDataSet#column_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#tag_key QuicksightDataSet#tag_key}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.property.matchAllValue">MatchAllValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#match_all_value QuicksightDataSet#match_all_value}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.property.tagMultiValueDelimiter">TagMultiValueDelimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#tag_multi_value_delimiter QuicksightDataSet#tag_multi_value_delimiter}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#column_name QuicksightDataSet#column_name}.

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#tag_key QuicksightDataSet#tag_key}.

---

##### `MatchAllValue`<sup>Optional</sup> <a name="MatchAllValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.property.matchAllValue"></a>

```go
MatchAllValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#match_all_value QuicksightDataSet#match_all_value}.

---

##### `TagMultiValueDelimiter`<sup>Optional</sup> <a name="TagMultiValueDelimiter" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.property.tagMultiValueDelimiter"></a>

```go
TagMultiValueDelimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_data_set#tag_multi_value_delimiter QuicksightDataSet#tag_multi_value_delimiter}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference <a name="QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columns">Columns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columnsInput"></a>

```go
func ColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columns"></a>

```go
func Columns() *[]*string
```

- *Type:* *[]*string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetColumnGroupsGeoSpatialColumnGroup
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

---


### QuicksightDataSetColumnGroupsList <a name="QuicksightDataSetColumnGroupsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetColumnGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDataSetColumnGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.get"></a>

```go
func Get(index *f64) QuicksightDataSetColumnGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetColumnGroupsOutputReference <a name="QuicksightDataSetColumnGroupsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetColumnGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDataSetColumnGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.putGeoSpatialColumnGroup">PutGeoSpatialColumnGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resetGeoSpatialColumnGroup">ResetGeoSpatialColumnGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGeoSpatialColumnGroup` <a name="PutGeoSpatialColumnGroup" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.putGeoSpatialColumnGroup"></a>

```go
func PutGeoSpatialColumnGroup(value QuicksightDataSetColumnGroupsGeoSpatialColumnGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.putGeoSpatialColumnGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

---

##### `ResetGeoSpatialColumnGroup` <a name="ResetGeoSpatialColumnGroup" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resetGeoSpatialColumnGroup"></a>

```go
func ResetGeoSpatialColumnGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroup">GeoSpatialColumnGroup</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference">QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroupInput">GeoSpatialColumnGroupInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GeoSpatialColumnGroup`<sup>Required</sup> <a name="GeoSpatialColumnGroup" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroup"></a>

```go
func GeoSpatialColumnGroup() QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference">QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference</a>

---

##### `GeoSpatialColumnGroupInput`<sup>Optional</sup> <a name="GeoSpatialColumnGroupInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroupInput"></a>

```go
func GeoSpatialColumnGroupInput() QuicksightDataSetColumnGroupsGeoSpatialColumnGroup
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetColumnLevelPermissionRulesList <a name="QuicksightDataSetColumnLevelPermissionRulesList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetColumnLevelPermissionRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDataSetColumnLevelPermissionRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.get"></a>

```go
func Get(index *f64) QuicksightDataSetColumnLevelPermissionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetColumnLevelPermissionRulesOutputReference <a name="QuicksightDataSetColumnLevelPermissionRulesOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetColumnLevelPermissionRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDataSetColumnLevelPermissionRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resetPrincipals">ResetPrincipals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resetColumnNames"></a>

```go
func ResetColumnNames()
```

##### `ResetPrincipals` <a name="ResetPrincipals" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resetPrincipals"></a>

```go
func ResetPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principals">Principals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNamesInput"></a>

```go
func ColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principalsInput"></a>

```go
func PrincipalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNames"></a>

```go
func ColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principals"></a>

```go
func Principals() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetDataSetUsageConfigurationOutputReference <a name="QuicksightDataSetDataSetUsageConfigurationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetDataSetUsageConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetDataSetUsageConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resetDisableUseAsDirectQuerySource">ResetDisableUseAsDirectQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resetDisableUseAsImportedSource">ResetDisableUseAsImportedSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableUseAsDirectQuerySource` <a name="ResetDisableUseAsDirectQuerySource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resetDisableUseAsDirectQuerySource"></a>

```go
func ResetDisableUseAsDirectQuerySource()
```

##### `ResetDisableUseAsImportedSource` <a name="ResetDisableUseAsImportedSource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resetDisableUseAsImportedSource"></a>

```go
func ResetDisableUseAsImportedSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySourceInput">DisableUseAsDirectQuerySourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSourceInput">DisableUseAsImportedSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySource">DisableUseAsDirectQuerySource</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSource">DisableUseAsImportedSource</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableUseAsDirectQuerySourceInput`<sup>Optional</sup> <a name="DisableUseAsDirectQuerySourceInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySourceInput"></a>

```go
func DisableUseAsDirectQuerySourceInput() interface{}
```

- *Type:* interface{}

---

##### `DisableUseAsImportedSourceInput`<sup>Optional</sup> <a name="DisableUseAsImportedSourceInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSourceInput"></a>

```go
func DisableUseAsImportedSourceInput() interface{}
```

- *Type:* interface{}

---

##### `DisableUseAsDirectQuerySource`<sup>Required</sup> <a name="DisableUseAsDirectQuerySource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySource"></a>

```go
func DisableUseAsDirectQuerySource() interface{}
```

- *Type:* interface{}

---

##### `DisableUseAsImportedSource`<sup>Required</sup> <a name="DisableUseAsImportedSource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSource"></a>

```go
func DisableUseAsImportedSource() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetDataSetUsageConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

---


### QuicksightDataSetFieldFoldersList <a name="QuicksightDataSetFieldFoldersList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetFieldFoldersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDataSetFieldFoldersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.get"></a>

```go
func Get(index *f64) QuicksightDataSetFieldFoldersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetFieldFoldersOutputReference <a name="QuicksightDataSetFieldFoldersOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetFieldFoldersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDataSetFieldFoldersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resetColumns">ResetColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumns` <a name="ResetColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resetColumns"></a>

```go
func ResetColumns()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.fieldFoldersIdInput">FieldFoldersIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.columns">Columns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.fieldFoldersId">FieldFoldersId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.columnsInput"></a>

```go
func ColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FieldFoldersIdInput`<sup>Optional</sup> <a name="FieldFoldersIdInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.fieldFoldersIdInput"></a>

```go
func FieldFoldersIdInput() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.columns"></a>

```go
func Columns() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FieldFoldersId`<sup>Required</sup> <a name="FieldFoldersId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.fieldFoldersId"></a>

```go
func FieldFoldersId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resetFormat"></a>

```go
func ResetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnTypeInput">NewColumnTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnType">NewColumnType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `NewColumnTypeInput`<sup>Optional</sup> <a name="NewColumnTypeInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnTypeInput"></a>

```go
func NewColumnTypeInput() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `NewColumnType`<sup>Required</sup> <a name="NewColumnType" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnType"></a>

```go
func NewColumnType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get"></a>

```go
func Get(index *f64) QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnIdInput">ColumnIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnId">ColumnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnIdInput`<sup>Optional</sup> <a name="ColumnIdInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnIdInput"></a>

```go
func ColumnIdInput() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `ColumnId`<sup>Required</sup> <a name="ColumnId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnId"></a>

```go
func ColumnId() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.putColumns">PutColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumns` <a name="PutColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.putColumns"></a>

```go
func PutColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.putColumns.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columns"></a>

```go
func Columns() QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList</a>

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columnsInput"></a>

```go
func ColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpressionInput">ConditionExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpression">ConditionExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionExpressionInput`<sup>Optional</sup> <a name="ConditionExpressionInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpressionInput"></a>

```go
func ConditionExpressionInput() *string
```

- *Type:* *string

---

##### `ConditionExpression`<sup>Required</sup> <a name="ConditionExpression" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpression"></a>

```go
func ConditionExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetLogicalTableMapDataTransformsFilterOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsList <a name="QuicksightDataSetLogicalTableMapDataTransformsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapDataTransformsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDataSetLogicalTableMapDataTransformsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.get"></a>

```go
func Get(index *f64) QuicksightDataSetLogicalTableMapDataTransformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetLogicalTableMapDataTransformsOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapDataTransformsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDataSetLogicalTableMapDataTransformsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCastColumnTypeOperation">PutCastColumnTypeOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCreateColumnsOperation">PutCreateColumnsOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putFilterOperation">PutFilterOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putProjectOperation">PutProjectOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putRenameColumnOperation">PutRenameColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putTagColumnOperation">PutTagColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putUntagColumnOperation">PutUntagColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetCastColumnTypeOperation">ResetCastColumnTypeOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetCreateColumnsOperation">ResetCreateColumnsOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetFilterOperation">ResetFilterOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetProjectOperation">ResetProjectOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetRenameColumnOperation">ResetRenameColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetTagColumnOperation">ResetTagColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetUntagColumnOperation">ResetUntagColumnOperation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCastColumnTypeOperation` <a name="PutCastColumnTypeOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCastColumnTypeOperation"></a>

```go
func PutCastColumnTypeOperation(value QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCastColumnTypeOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

---

##### `PutCreateColumnsOperation` <a name="PutCreateColumnsOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCreateColumnsOperation"></a>

```go
func PutCreateColumnsOperation(value QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCreateColumnsOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

---

##### `PutFilterOperation` <a name="PutFilterOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putFilterOperation"></a>

```go
func PutFilterOperation(value QuicksightDataSetLogicalTableMapDataTransformsFilterOperation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putFilterOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

---

##### `PutProjectOperation` <a name="PutProjectOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putProjectOperation"></a>

```go
func PutProjectOperation(value QuicksightDataSetLogicalTableMapDataTransformsProjectOperation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putProjectOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

---

##### `PutRenameColumnOperation` <a name="PutRenameColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putRenameColumnOperation"></a>

```go
func PutRenameColumnOperation(value QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putRenameColumnOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

---

##### `PutTagColumnOperation` <a name="PutTagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putTagColumnOperation"></a>

```go
func PutTagColumnOperation(value QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putTagColumnOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

---

##### `PutUntagColumnOperation` <a name="PutUntagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putUntagColumnOperation"></a>

```go
func PutUntagColumnOperation(value QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putUntagColumnOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a>

---

##### `ResetCastColumnTypeOperation` <a name="ResetCastColumnTypeOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetCastColumnTypeOperation"></a>

```go
func ResetCastColumnTypeOperation()
```

##### `ResetCreateColumnsOperation` <a name="ResetCreateColumnsOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetCreateColumnsOperation"></a>

```go
func ResetCreateColumnsOperation()
```

##### `ResetFilterOperation` <a name="ResetFilterOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetFilterOperation"></a>

```go
func ResetFilterOperation()
```

##### `ResetProjectOperation` <a name="ResetProjectOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetProjectOperation"></a>

```go
func ResetProjectOperation()
```

##### `ResetRenameColumnOperation` <a name="ResetRenameColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetRenameColumnOperation"></a>

```go
func ResetRenameColumnOperation()
```

##### `ResetTagColumnOperation` <a name="ResetTagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetTagColumnOperation"></a>

```go
func ResetTagColumnOperation()
```

##### `ResetUntagColumnOperation` <a name="ResetUntagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetUntagColumnOperation"></a>

```go
func ResetUntagColumnOperation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperation">CastColumnTypeOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperation">CreateColumnsOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperation">FilterOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperation">ProjectOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperation">RenameColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperation">TagColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.untagColumnOperation">UntagColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperationInput">CastColumnTypeOperationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperationInput">CreateColumnsOperationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperationInput">FilterOperationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperationInput">ProjectOperationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperationInput">RenameColumnOperationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperationInput">TagColumnOperationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.untagColumnOperationInput">UntagColumnOperationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CastColumnTypeOperation`<sup>Required</sup> <a name="CastColumnTypeOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperation"></a>

```go
func CastColumnTypeOperation() QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference</a>

---

##### `CreateColumnsOperation`<sup>Required</sup> <a name="CreateColumnsOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperation"></a>

```go
func CreateColumnsOperation() QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference</a>

---

##### `FilterOperation`<sup>Required</sup> <a name="FilterOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperation"></a>

```go
func FilterOperation() QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference</a>

---

##### `ProjectOperation`<sup>Required</sup> <a name="ProjectOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperation"></a>

```go
func ProjectOperation() QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference</a>

---

##### `RenameColumnOperation`<sup>Required</sup> <a name="RenameColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperation"></a>

```go
func RenameColumnOperation() QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference</a>

---

##### `TagColumnOperation`<sup>Required</sup> <a name="TagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperation"></a>

```go
func TagColumnOperation() QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference</a>

---

##### `UntagColumnOperation`<sup>Required</sup> <a name="UntagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.untagColumnOperation"></a>

```go
func UntagColumnOperation() QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference</a>

---

##### `CastColumnTypeOperationInput`<sup>Optional</sup> <a name="CastColumnTypeOperationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperationInput"></a>

```go
func CastColumnTypeOperationInput() QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

---

##### `CreateColumnsOperationInput`<sup>Optional</sup> <a name="CreateColumnsOperationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperationInput"></a>

```go
func CreateColumnsOperationInput() QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

---

##### `FilterOperationInput`<sup>Optional</sup> <a name="FilterOperationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperationInput"></a>

```go
func FilterOperationInput() QuicksightDataSetLogicalTableMapDataTransformsFilterOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

---

##### `ProjectOperationInput`<sup>Optional</sup> <a name="ProjectOperationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperationInput"></a>

```go
func ProjectOperationInput() QuicksightDataSetLogicalTableMapDataTransformsProjectOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

---

##### `RenameColumnOperationInput`<sup>Optional</sup> <a name="RenameColumnOperationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperationInput"></a>

```go
func RenameColumnOperationInput() QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

---

##### `TagColumnOperationInput`<sup>Optional</sup> <a name="TagColumnOperationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperationInput"></a>

```go
func TagColumnOperationInput() QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

---

##### `UntagColumnOperationInput`<sup>Optional</sup> <a name="UntagColumnOperationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.untagColumnOperationInput"></a>

```go
func UntagColumnOperationInput() QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumnsInput">ProjectedColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumns">ProjectedColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectedColumnsInput`<sup>Optional</sup> <a name="ProjectedColumnsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumnsInput"></a>

```go
func ProjectedColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectedColumns`<sup>Required</sup> <a name="ProjectedColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumns"></a>

```go
func ProjectedColumns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetLogicalTableMapDataTransformsProjectOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnNameInput">NewColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnName">NewColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `NewColumnNameInput`<sup>Optional</sup> <a name="NewColumnNameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnNameInput"></a>

```go
func NewColumnNameInput() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `NewColumnName`<sup>Required</sup> <a name="NewColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnName"></a>

```go
func NewColumnName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.putTags">PutTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.putTags.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tags"></a>

```go
func Tags() QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList</a>

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get"></a>

```go
func Get(index *f64) QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.putColumnDescription">PutColumnDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resetColumnDescription">ResetColumnDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resetColumnGeographicRole">ResetColumnGeographicRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnDescription` <a name="PutColumnDescription" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.putColumnDescription"></a>

```go
func PutColumnDescription(value QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.putColumnDescription.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

---

##### `ResetColumnDescription` <a name="ResetColumnDescription" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resetColumnDescription"></a>

```go
func ResetColumnDescription()
```

##### `ResetColumnGeographicRole` <a name="ResetColumnGeographicRole" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resetColumnGeographicRole"></a>

```go
func ResetColumnGeographicRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescription">ColumnDescription</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescriptionInput">ColumnDescriptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRoleInput">ColumnGeographicRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRole">ColumnGeographicRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnDescription`<sup>Required</sup> <a name="ColumnDescription" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescription"></a>

```go
func ColumnDescription() QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference</a>

---

##### `ColumnDescriptionInput`<sup>Optional</sup> <a name="ColumnDescriptionInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescriptionInput"></a>

```go
func ColumnDescriptionInput() QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

---

##### `ColumnGeographicRoleInput`<sup>Optional</sup> <a name="ColumnGeographicRoleInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRoleInput"></a>

```go
func ColumnGeographicRoleInput() *string
```

- *Type:* *string

---

##### `ColumnGeographicRole`<sup>Required</sup> <a name="ColumnGeographicRole" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRole"></a>

```go
func ColumnGeographicRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.tagNamesInput">TagNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.tagNames">TagNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `TagNamesInput`<sup>Optional</sup> <a name="TagNamesInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.tagNamesInput"></a>

```go
func TagNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `TagNames`<sup>Required</sup> <a name="TagNames" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.tagNames"></a>

```go
func TagNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a>

---


### QuicksightDataSetLogicalTableMapList <a name="QuicksightDataSetLogicalTableMapList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDataSetLogicalTableMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.get"></a>

```go
func Get(index *f64) QuicksightDataSetLogicalTableMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetLogicalTableMapOutputReference <a name="QuicksightDataSetLogicalTableMapOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDataSetLogicalTableMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putDataTransforms">PutDataTransforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resetDataTransforms">ResetDataTransforms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataTransforms` <a name="PutDataTransforms" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putDataTransforms"></a>

```go
func PutDataTransforms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putDataTransforms.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putSource"></a>

```go
func PutSource(value QuicksightDataSetLogicalTableMapSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a>

---

##### `ResetDataTransforms` <a name="ResetDataTransforms" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resetDataTransforms"></a>

```go
func ResetDataTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.dataTransforms">DataTransforms</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList">QuicksightDataSetLogicalTableMapDataTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference">QuicksightDataSetLogicalTableMapSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.dataTransformsInput">DataTransformsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.logicalTableMapIdInput">LogicalTableMapIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.logicalTableMapId">LogicalTableMapId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataTransforms`<sup>Required</sup> <a name="DataTransforms" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.dataTransforms"></a>

```go
func DataTransforms() QuicksightDataSetLogicalTableMapDataTransformsList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList">QuicksightDataSetLogicalTableMapDataTransformsList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.source"></a>

```go
func Source() QuicksightDataSetLogicalTableMapSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference">QuicksightDataSetLogicalTableMapSourceOutputReference</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `DataTransformsInput`<sup>Optional</sup> <a name="DataTransformsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.dataTransformsInput"></a>

```go
func DataTransformsInput() interface{}
```

- *Type:* interface{}

---

##### `LogicalTableMapIdInput`<sup>Optional</sup> <a name="LogicalTableMapIdInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.logicalTableMapIdInput"></a>

```go
func LogicalTableMapIdInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.sourceInput"></a>

```go
func SourceInput() QuicksightDataSetLogicalTableMapSource
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a>

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `LogicalTableMapId`<sup>Required</sup> <a name="LogicalTableMapId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.logicalTableMapId"></a>

```go
func LogicalTableMapId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resetUniqueKey">ResetUniqueKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUniqueKey` <a name="ResetUniqueKey" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resetUniqueKey"></a>

```go
func ResetUniqueKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKeyInput">UniqueKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKey">UniqueKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UniqueKeyInput`<sup>Optional</sup> <a name="UniqueKeyInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKeyInput"></a>

```go
func UniqueKeyInput() interface{}
```

- *Type:* interface{}

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKey"></a>

```go
func UniqueKey() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

---


### QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putLeftJoinKeyProperties">PutLeftJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putRightJoinKeyProperties">PutRightJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetLeftJoinKeyProperties">ResetLeftJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetRightJoinKeyProperties">ResetRightJoinKeyProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLeftJoinKeyProperties` <a name="PutLeftJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putLeftJoinKeyProperties"></a>

```go
func PutLeftJoinKeyProperties(value QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putLeftJoinKeyProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

---

##### `PutRightJoinKeyProperties` <a name="PutRightJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putRightJoinKeyProperties"></a>

```go
func PutRightJoinKeyProperties(value QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putRightJoinKeyProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

---

##### `ResetLeftJoinKeyProperties` <a name="ResetLeftJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetLeftJoinKeyProperties"></a>

```go
func ResetLeftJoinKeyProperties()
```

##### `ResetRightJoinKeyProperties` <a name="ResetRightJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetRightJoinKeyProperties"></a>

```go
func ResetRightJoinKeyProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyProperties">LeftJoinKeyProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyProperties">RightJoinKeyProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyPropertiesInput">LeftJoinKeyPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperandInput">LeftOperandInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClauseInput">OnClauseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyPropertiesInput">RightJoinKeyPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperandInput">RightOperandInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperand">LeftOperand</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClause">OnClause</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperand">RightOperand</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LeftJoinKeyProperties`<sup>Required</sup> <a name="LeftJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyProperties"></a>

```go
func LeftJoinKeyProperties() QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference</a>

---

##### `RightJoinKeyProperties`<sup>Required</sup> <a name="RightJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyProperties"></a>

```go
func RightJoinKeyProperties() QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference</a>

---

##### `LeftJoinKeyPropertiesInput`<sup>Optional</sup> <a name="LeftJoinKeyPropertiesInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyPropertiesInput"></a>

```go
func LeftJoinKeyPropertiesInput() QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

---

##### `LeftOperandInput`<sup>Optional</sup> <a name="LeftOperandInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperandInput"></a>

```go
func LeftOperandInput() *string
```

- *Type:* *string

---

##### `OnClauseInput`<sup>Optional</sup> <a name="OnClauseInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClauseInput"></a>

```go
func OnClauseInput() *string
```

- *Type:* *string

---

##### `RightJoinKeyPropertiesInput`<sup>Optional</sup> <a name="RightJoinKeyPropertiesInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyPropertiesInput"></a>

```go
func RightJoinKeyPropertiesInput() QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

---

##### `RightOperandInput`<sup>Optional</sup> <a name="RightOperandInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperandInput"></a>

```go
func RightOperandInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `LeftOperand`<sup>Required</sup> <a name="LeftOperand" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperand"></a>

```go
func LeftOperand() *string
```

- *Type:* *string

---

##### `OnClause`<sup>Required</sup> <a name="OnClause" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClause"></a>

```go
func OnClause() *string
```

- *Type:* *string

---

##### `RightOperand`<sup>Required</sup> <a name="RightOperand" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperand"></a>

```go
func RightOperand() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetLogicalTableMapSourceJoinInstruction
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

---


### QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resetUniqueKey">ResetUniqueKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUniqueKey` <a name="ResetUniqueKey" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resetUniqueKey"></a>

```go
func ResetUniqueKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKeyInput">UniqueKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKey">UniqueKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UniqueKeyInput`<sup>Optional</sup> <a name="UniqueKeyInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKeyInput"></a>

```go
func UniqueKeyInput() interface{}
```

- *Type:* interface{}

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKey"></a>

```go
func UniqueKey() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

---


### QuicksightDataSetLogicalTableMapSourceOutputReference <a name="QuicksightDataSetLogicalTableMapSourceOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetLogicalTableMapSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetLogicalTableMapSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction">PutJoinInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetDataSetArn">ResetDataSetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetJoinInstruction">ResetJoinInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetPhysicalTableId">ResetPhysicalTableId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJoinInstruction` <a name="PutJoinInstruction" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction"></a>

```go
func PutJoinInstruction(value QuicksightDataSetLogicalTableMapSourceJoinInstruction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

---

##### `ResetDataSetArn` <a name="ResetDataSetArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetDataSetArn"></a>

```go
func ResetDataSetArn()
```

##### `ResetJoinInstruction` <a name="ResetJoinInstruction" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetJoinInstruction"></a>

```go
func ResetJoinInstruction()
```

##### `ResetPhysicalTableId` <a name="ResetPhysicalTableId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetPhysicalTableId"></a>

```go
func ResetPhysicalTableId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstruction">JoinInstruction</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArnInput">DataSetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstructionInput">JoinInstructionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableIdInput">PhysicalTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArn">DataSetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableId">PhysicalTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JoinInstruction`<sup>Required</sup> <a name="JoinInstruction" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstruction"></a>

```go
func JoinInstruction() QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference</a>

---

##### `DataSetArnInput`<sup>Optional</sup> <a name="DataSetArnInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArnInput"></a>

```go
func DataSetArnInput() *string
```

- *Type:* *string

---

##### `JoinInstructionInput`<sup>Optional</sup> <a name="JoinInstructionInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstructionInput"></a>

```go
func JoinInstructionInput() QuicksightDataSetLogicalTableMapSourceJoinInstruction
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

---

##### `PhysicalTableIdInput`<sup>Optional</sup> <a name="PhysicalTableIdInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableIdInput"></a>

```go
func PhysicalTableIdInput() *string
```

- *Type:* *string

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArn"></a>

```go
func DataSetArn() *string
```

- *Type:* *string

---

##### `PhysicalTableId`<sup>Required</sup> <a name="PhysicalTableId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableId"></a>

```go
func PhysicalTableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetLogicalTableMapSource
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a>

---


### QuicksightDataSetPermissionsList <a name="QuicksightDataSetPermissionsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDataSetPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.get"></a>

```go
func Get(index *f64) QuicksightDataSetPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetPermissionsOutputReference <a name="QuicksightDataSetPermissionsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDataSetPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetPhysicalTableMapCustomSqlColumnsList <a name="QuicksightDataSetPhysicalTableMapCustomSqlColumnsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetPhysicalTableMapCustomSqlColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDataSetPhysicalTableMapCustomSqlColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get"></a>

```go
func Get(index *f64) QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference <a name="QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetPhysicalTableMapCustomSqlOutputReference <a name="QuicksightDataSetPhysicalTableMapCustomSqlOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetPhysicalTableMapCustomSqlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetPhysicalTableMapCustomSqlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.putColumns">PutColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetColumns">ResetColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumns` <a name="PutColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.putColumns"></a>

```go
func PutColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.putColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetColumns` <a name="ResetColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetColumns"></a>

```go
func ResetColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList">QuicksightDataSetPhysicalTableMapCustomSqlColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArnInput">DataSourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQueryInput">SqlQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQuery">SqlQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columns"></a>

```go
func Columns() QuicksightDataSetPhysicalTableMapCustomSqlColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList">QuicksightDataSetPhysicalTableMapCustomSqlColumnsList</a>

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columnsInput"></a>

```go
func ColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `DataSourceArnInput`<sup>Optional</sup> <a name="DataSourceArnInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArnInput"></a>

```go
func DataSourceArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SqlQueryInput`<sup>Optional</sup> <a name="SqlQueryInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQueryInput"></a>

```go
func SqlQueryInput() *string
```

- *Type:* *string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArn"></a>

```go
func DataSourceArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SqlQuery`<sup>Required</sup> <a name="SqlQuery" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQuery"></a>

```go
func SqlQuery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetPhysicalTableMapCustomSql
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a>

---


### QuicksightDataSetPhysicalTableMapList <a name="QuicksightDataSetPhysicalTableMapList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetPhysicalTableMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDataSetPhysicalTableMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.get"></a>

```go
func Get(index *f64) QuicksightDataSetPhysicalTableMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetPhysicalTableMapOutputReference <a name="QuicksightDataSetPhysicalTableMapOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetPhysicalTableMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDataSetPhysicalTableMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putCustomSql">PutCustomSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putRelationalTable">PutRelationalTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putS3Source">PutS3Source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetCustomSql">ResetCustomSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetRelationalTable">ResetRelationalTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetS3Source">ResetS3Source</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomSql` <a name="PutCustomSql" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putCustomSql"></a>

```go
func PutCustomSql(value QuicksightDataSetPhysicalTableMapCustomSql)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putCustomSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a>

---

##### `PutRelationalTable` <a name="PutRelationalTable" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putRelationalTable"></a>

```go
func PutRelationalTable(value QuicksightDataSetPhysicalTableMapRelationalTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putRelationalTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a>

---

##### `PutS3Source` <a name="PutS3Source" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putS3Source"></a>

```go
func PutS3Source(value QuicksightDataSetPhysicalTableMapS3Source)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putS3Source.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a>

---

##### `ResetCustomSql` <a name="ResetCustomSql" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetCustomSql"></a>

```go
func ResetCustomSql()
```

##### `ResetRelationalTable` <a name="ResetRelationalTable" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetRelationalTable"></a>

```go
func ResetRelationalTable()
```

##### `ResetS3Source` <a name="ResetS3Source" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetS3Source"></a>

```go
func ResetS3Source()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.customSql">CustomSql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference">QuicksightDataSetPhysicalTableMapCustomSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.relationalTable">RelationalTable</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference">QuicksightDataSetPhysicalTableMapRelationalTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.s3Source">S3Source</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference">QuicksightDataSetPhysicalTableMapS3SourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.customSqlInput">CustomSqlInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.physicalTableMapIdInput">PhysicalTableMapIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.relationalTableInput">RelationalTableInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.s3SourceInput">S3SourceInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.physicalTableMapId">PhysicalTableMapId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomSql`<sup>Required</sup> <a name="CustomSql" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.customSql"></a>

```go
func CustomSql() QuicksightDataSetPhysicalTableMapCustomSqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference">QuicksightDataSetPhysicalTableMapCustomSqlOutputReference</a>

---

##### `RelationalTable`<sup>Required</sup> <a name="RelationalTable" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.relationalTable"></a>

```go
func RelationalTable() QuicksightDataSetPhysicalTableMapRelationalTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference">QuicksightDataSetPhysicalTableMapRelationalTableOutputReference</a>

---

##### `S3Source`<sup>Required</sup> <a name="S3Source" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.s3Source"></a>

```go
func S3Source() QuicksightDataSetPhysicalTableMapS3SourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference">QuicksightDataSetPhysicalTableMapS3SourceOutputReference</a>

---

##### `CustomSqlInput`<sup>Optional</sup> <a name="CustomSqlInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.customSqlInput"></a>

```go
func CustomSqlInput() QuicksightDataSetPhysicalTableMapCustomSql
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a>

---

##### `PhysicalTableMapIdInput`<sup>Optional</sup> <a name="PhysicalTableMapIdInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.physicalTableMapIdInput"></a>

```go
func PhysicalTableMapIdInput() *string
```

- *Type:* *string

---

##### `RelationalTableInput`<sup>Optional</sup> <a name="RelationalTableInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.relationalTableInput"></a>

```go
func RelationalTableInput() QuicksightDataSetPhysicalTableMapRelationalTable
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a>

---

##### `S3SourceInput`<sup>Optional</sup> <a name="S3SourceInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.s3SourceInput"></a>

```go
func S3SourceInput() QuicksightDataSetPhysicalTableMapS3Source
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a>

---

##### `PhysicalTableMapId`<sup>Required</sup> <a name="PhysicalTableMapId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.physicalTableMapId"></a>

```go
func PhysicalTableMapId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList <a name="QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get"></a>

```go
func Get(index *f64) QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference <a name="QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetPhysicalTableMapRelationalTableOutputReference <a name="QuicksightDataSetPhysicalTableMapRelationalTableOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetPhysicalTableMapRelationalTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetPhysicalTableMapRelationalTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.putInputColumns">PutInputColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputColumns` <a name="PutInputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.putInputColumns"></a>

```go
func PutInputColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.putInputColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetSchema"></a>

```go
func ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumns">InputColumns</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList">QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArnInput">DataSourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumnsInput">InputColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumns"></a>

```go
func InputColumns() QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList">QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `DataSourceArnInput`<sup>Optional</sup> <a name="DataSourceArnInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArnInput"></a>

```go
func DataSourceArnInput() *string
```

- *Type:* *string

---

##### `InputColumnsInput`<sup>Optional</sup> <a name="InputColumnsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumnsInput"></a>

```go
func InputColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArn"></a>

```go
func DataSourceArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetPhysicalTableMapRelationalTable
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a>

---


### QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList <a name="QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetPhysicalTableMapS3SourceInputColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get"></a>

```go
func Get(index *f64) QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference <a name="QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetPhysicalTableMapS3SourceOutputReference <a name="QuicksightDataSetPhysicalTableMapS3SourceOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetPhysicalTableMapS3SourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetPhysicalTableMapS3SourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putInputColumns">PutInputColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putUploadSettings">PutUploadSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputColumns` <a name="PutInputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putInputColumns"></a>

```go
func PutInputColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putInputColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUploadSettings` <a name="PutUploadSettings" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putUploadSettings"></a>

```go
func PutUploadSettings(value QuicksightDataSetPhysicalTableMapS3SourceUploadSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putUploadSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumns">InputColumns</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList">QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettings">UploadSettings</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference">QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArnInput">DataSourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumnsInput">InputColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettingsInput">UploadSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumns"></a>

```go
func InputColumns() QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList">QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList</a>

---

##### `UploadSettings`<sup>Required</sup> <a name="UploadSettings" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettings"></a>

```go
func UploadSettings() QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference">QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference</a>

---

##### `DataSourceArnInput`<sup>Optional</sup> <a name="DataSourceArnInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArnInput"></a>

```go
func DataSourceArnInput() *string
```

- *Type:* *string

---

##### `InputColumnsInput`<sup>Optional</sup> <a name="InputColumnsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumnsInput"></a>

```go
func InputColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `UploadSettingsInput`<sup>Optional</sup> <a name="UploadSettingsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettingsInput"></a>

```go
func UploadSettingsInput() QuicksightDataSetPhysicalTableMapS3SourceUploadSettings
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArn"></a>

```go
func DataSourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetPhysicalTableMapS3Source
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a>

---


### QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference <a name="QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetContainsHeader">ResetContainsHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetStartFromRow">ResetStartFromRow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetTextQualifier">ResetTextQualifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainsHeader` <a name="ResetContainsHeader" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetContainsHeader"></a>

```go
func ResetContainsHeader()
```

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetFormat"></a>

```go
func ResetFormat()
```

##### `ResetStartFromRow` <a name="ResetStartFromRow" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetStartFromRow"></a>

```go
func ResetStartFromRow()
```

##### `ResetTextQualifier` <a name="ResetTextQualifier" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetTextQualifier"></a>

```go
func ResetTextQualifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeaderInput">ContainsHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRowInput">StartFromRowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifierInput">TextQualifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeader">ContainsHeader</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRow">StartFromRow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifier">TextQualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsHeaderInput`<sup>Optional</sup> <a name="ContainsHeaderInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeaderInput"></a>

```go
func ContainsHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `StartFromRowInput`<sup>Optional</sup> <a name="StartFromRowInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRowInput"></a>

```go
func StartFromRowInput() *f64
```

- *Type:* *f64

---

##### `TextQualifierInput`<sup>Optional</sup> <a name="TextQualifierInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifierInput"></a>

```go
func TextQualifierInput() *string
```

- *Type:* *string

---

##### `ContainsHeader`<sup>Required</sup> <a name="ContainsHeader" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeader"></a>

```go
func ContainsHeader() interface{}
```

- *Type:* interface{}

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `StartFromRow`<sup>Required</sup> <a name="StartFromRow" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRow"></a>

```go
func StartFromRow() *f64
```

- *Type:* *f64

---

##### `TextQualifier`<sup>Required</sup> <a name="TextQualifier" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifier"></a>

```go
func TextQualifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetPhysicalTableMapS3SourceUploadSettings
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

---


### QuicksightDataSetRowLevelPermissionDataSetOutputReference <a name="QuicksightDataSetRowLevelPermissionDataSetOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetRowLevelPermissionDataSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetRowLevelPermissionDataSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetFormatVersion">ResetFormatVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFormatVersion` <a name="ResetFormatVersion" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetFormatVersion"></a>

```go
func ResetFormatVersion()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersionInput">FormatVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicyInput">PermissionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersion">FormatVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicy">PermissionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `FormatVersionInput`<sup>Optional</sup> <a name="FormatVersionInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersionInput"></a>

```go
func FormatVersionInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PermissionPolicyInput`<sup>Optional</sup> <a name="PermissionPolicyInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicyInput"></a>

```go
func PermissionPolicyInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FormatVersion`<sup>Required</sup> <a name="FormatVersion" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersion"></a>

```go
func FormatVersion() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `PermissionPolicy`<sup>Required</sup> <a name="PermissionPolicy" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicy"></a>

```go
func PermissionPolicy() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetRowLevelPermissionDataSet
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

---


### QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference <a name="QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetRowLevelPermissionTagConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.putTagRules">PutTagRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagRules` <a name="PutTagRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.putTagRules"></a>

```go
func PutTagRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.putTagRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.tagRules">TagRules</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList">QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.tagRulesInput">TagRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration">QuicksightDataSetRowLevelPermissionTagConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagRules`<sup>Required</sup> <a name="TagRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.tagRules"></a>

```go
func TagRules() QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList">QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagRulesInput`<sup>Optional</sup> <a name="TagRulesInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.tagRulesInput"></a>

```go
func TagRulesInput() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDataSetRowLevelPermissionTagConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration">QuicksightDataSetRowLevelPermissionTagConfiguration</a>

---


### QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList <a name="QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.get"></a>

```go
func Get(index *f64) QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference <a name="QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/quicksightdataset"

quicksightdataset.NewQuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resetMatchAllValue">ResetMatchAllValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resetTagMultiValueDelimiter">ResetTagMultiValueDelimiter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchAllValue` <a name="ResetMatchAllValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resetMatchAllValue"></a>

```go
func ResetMatchAllValue()
```

##### `ResetTagMultiValueDelimiter` <a name="ResetTagMultiValueDelimiter" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resetTagMultiValueDelimiter"></a>

```go
func ResetTagMultiValueDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.matchAllValueInput">MatchAllValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagMultiValueDelimiterInput">TagMultiValueDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.matchAllValue">MatchAllValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagMultiValueDelimiter">TagMultiValueDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `MatchAllValueInput`<sup>Optional</sup> <a name="MatchAllValueInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.matchAllValueInput"></a>

```go
func MatchAllValueInput() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TagMultiValueDelimiterInput`<sup>Optional</sup> <a name="TagMultiValueDelimiterInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagMultiValueDelimiterInput"></a>

```go
func TagMultiValueDelimiterInput() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `MatchAllValue`<sup>Required</sup> <a name="MatchAllValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.matchAllValue"></a>

```go
func MatchAllValue() *string
```

- *Type:* *string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagMultiValueDelimiter`<sup>Required</sup> <a name="TagMultiValueDelimiter" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagMultiValueDelimiter"></a>

```go
func TagMultiValueDelimiter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



