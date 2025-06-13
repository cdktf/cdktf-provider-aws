# `dataAwsNeptuneEngineVersion` Submodule <a name="`dataAwsNeptuneEngineVersion` Submodule" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNeptuneEngineVersion <a name="DataAwsNeptuneEngineVersion" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version aws_neptune_engine_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/dataawsneptuneengineversion"

dataawsneptuneengineversion.NewDataAwsNeptuneEngineVersion(scope Construct, id *string, config DataAwsNeptuneEngineVersionConfig) DataAwsNeptuneEngineVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig">DataAwsNeptuneEngineVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig">DataAwsNeptuneEngineVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetDefaultOnly">ResetDefaultOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetHasMajorTarget">ResetHasMajorTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetHasMinorTarget">ResetHasMinorTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetLatest">ResetLatest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetParameterGroupFamily">ResetParameterGroupFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredMajorTargets">ResetPreferredMajorTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredUpgradeTargets">ResetPreferredUpgradeTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredVersions">ResetPreferredVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDefaultOnly` <a name="ResetDefaultOnly" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetDefaultOnly"></a>

```go
func ResetDefaultOnly()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetHasMajorTarget` <a name="ResetHasMajorTarget" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetHasMajorTarget"></a>

```go
func ResetHasMajorTarget()
```

##### `ResetHasMinorTarget` <a name="ResetHasMinorTarget" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetHasMinorTarget"></a>

```go
func ResetHasMinorTarget()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetLatest` <a name="ResetLatest" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetLatest"></a>

```go
func ResetLatest()
```

##### `ResetParameterGroupFamily` <a name="ResetParameterGroupFamily" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetParameterGroupFamily"></a>

```go
func ResetParameterGroupFamily()
```

##### `ResetPreferredMajorTargets` <a name="ResetPreferredMajorTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredMajorTargets"></a>

```go
func ResetPreferredMajorTargets()
```

##### `ResetPreferredUpgradeTargets` <a name="ResetPreferredUpgradeTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredUpgradeTargets"></a>

```go
func ResetPreferredUpgradeTargets()
```

##### `ResetPreferredVersions` <a name="ResetPreferredVersions" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredVersions"></a>

```go
func ResetPreferredVersions()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsNeptuneEngineVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/dataawsneptuneengineversion"

dataawsneptuneengineversion.DataAwsNeptuneEngineVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/dataawsneptuneengineversion"

dataawsneptuneengineversion.DataAwsNeptuneEngineVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/dataawsneptuneengineversion"

dataawsneptuneengineversion.DataAwsNeptuneEngineVersion_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/dataawsneptuneengineversion"

dataawsneptuneengineversion.DataAwsNeptuneEngineVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsNeptuneEngineVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsNeptuneEngineVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsNeptuneEngineVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsNeptuneEngineVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultCharacterSet">DefaultCharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engineDescription">EngineDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.exportableLogTypes">ExportableLogTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportedCharacterSets">SupportedCharacterSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportedTimezones">SupportedTimezones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsGlobalDatabases">SupportsGlobalDatabases</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsLogExportsToCloudwatch">SupportsLogExportsToCloudwatch</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsReadReplica">SupportsReadReplica</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validMajorTargets">ValidMajorTargets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validMinorTargets">ValidMinorTargets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validUpgradeTargets">ValidUpgradeTargets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionActual">VersionActual</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionDescription">VersionDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultOnlyInput">DefaultOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMajorTargetInput">HasMajorTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMinorTargetInput">HasMinorTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.latestInput">LatestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.parameterGroupFamilyInput">ParameterGroupFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredMajorTargetsInput">PreferredMajorTargetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredUpgradeTargetsInput">PreferredUpgradeTargetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredVersionsInput">PreferredVersionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultOnly">DefaultOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMajorTarget">HasMajorTarget</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMinorTarget">HasMinorTarget</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.latest">Latest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.parameterGroupFamily">ParameterGroupFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredMajorTargets">PreferredMajorTargets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredUpgradeTargets">PreferredUpgradeTargets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredVersions">PreferredVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DefaultCharacterSet`<sup>Required</sup> <a name="DefaultCharacterSet" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultCharacterSet"></a>

```go
func DefaultCharacterSet() *string
```

- *Type:* *string

---

##### `EngineDescription`<sup>Required</sup> <a name="EngineDescription" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engineDescription"></a>

```go
func EngineDescription() *string
```

- *Type:* *string

---

##### `ExportableLogTypes`<sup>Required</sup> <a name="ExportableLogTypes" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.exportableLogTypes"></a>

```go
func ExportableLogTypes() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedCharacterSets`<sup>Required</sup> <a name="SupportedCharacterSets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportedCharacterSets"></a>

```go
func SupportedCharacterSets() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedTimezones`<sup>Required</sup> <a name="SupportedTimezones" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportedTimezones"></a>

```go
func SupportedTimezones() *[]*string
```

- *Type:* *[]*string

---

##### `SupportsGlobalDatabases`<sup>Required</sup> <a name="SupportsGlobalDatabases" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsGlobalDatabases"></a>

```go
func SupportsGlobalDatabases() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SupportsLogExportsToCloudwatch`<sup>Required</sup> <a name="SupportsLogExportsToCloudwatch" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsLogExportsToCloudwatch"></a>

```go
func SupportsLogExportsToCloudwatch() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SupportsReadReplica`<sup>Required</sup> <a name="SupportsReadReplica" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsReadReplica"></a>

```go
func SupportsReadReplica() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ValidMajorTargets`<sup>Required</sup> <a name="ValidMajorTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validMajorTargets"></a>

```go
func ValidMajorTargets() *[]*string
```

- *Type:* *[]*string

---

##### `ValidMinorTargets`<sup>Required</sup> <a name="ValidMinorTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validMinorTargets"></a>

```go
func ValidMinorTargets() *[]*string
```

- *Type:* *[]*string

---

##### `ValidUpgradeTargets`<sup>Required</sup> <a name="ValidUpgradeTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validUpgradeTargets"></a>

```go
func ValidUpgradeTargets() *[]*string
```

- *Type:* *[]*string

---

##### `VersionActual`<sup>Required</sup> <a name="VersionActual" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionActual"></a>

```go
func VersionActual() *string
```

- *Type:* *string

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionDescription"></a>

```go
func VersionDescription() *string
```

- *Type:* *string

---

##### `DefaultOnlyInput`<sup>Optional</sup> <a name="DefaultOnlyInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultOnlyInput"></a>

```go
func DefaultOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `HasMajorTargetInput`<sup>Optional</sup> <a name="HasMajorTargetInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMajorTargetInput"></a>

```go
func HasMajorTargetInput() interface{}
```

- *Type:* interface{}

---

##### `HasMinorTargetInput`<sup>Optional</sup> <a name="HasMinorTargetInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMinorTargetInput"></a>

```go
func HasMinorTargetInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LatestInput`<sup>Optional</sup> <a name="LatestInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.latestInput"></a>

```go
func LatestInput() interface{}
```

- *Type:* interface{}

---

##### `ParameterGroupFamilyInput`<sup>Optional</sup> <a name="ParameterGroupFamilyInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.parameterGroupFamilyInput"></a>

```go
func ParameterGroupFamilyInput() *string
```

- *Type:* *string

---

##### `PreferredMajorTargetsInput`<sup>Optional</sup> <a name="PreferredMajorTargetsInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredMajorTargetsInput"></a>

```go
func PreferredMajorTargetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredUpgradeTargetsInput`<sup>Optional</sup> <a name="PreferredUpgradeTargetsInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredUpgradeTargetsInput"></a>

```go
func PreferredUpgradeTargetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredVersionsInput`<sup>Optional</sup> <a name="PreferredVersionsInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredVersionsInput"></a>

```go
func PreferredVersionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `DefaultOnly`<sup>Required</sup> <a name="DefaultOnly" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultOnly"></a>

```go
func DefaultOnly() interface{}
```

- *Type:* interface{}

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `HasMajorTarget`<sup>Required</sup> <a name="HasMajorTarget" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMajorTarget"></a>

```go
func HasMajorTarget() interface{}
```

- *Type:* interface{}

---

##### `HasMinorTarget`<sup>Required</sup> <a name="HasMinorTarget" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMinorTarget"></a>

```go
func HasMinorTarget() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Latest`<sup>Required</sup> <a name="Latest" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.latest"></a>

```go
func Latest() interface{}
```

- *Type:* interface{}

---

##### `ParameterGroupFamily`<sup>Required</sup> <a name="ParameterGroupFamily" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.parameterGroupFamily"></a>

```go
func ParameterGroupFamily() *string
```

- *Type:* *string

---

##### `PreferredMajorTargets`<sup>Required</sup> <a name="PreferredMajorTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredMajorTargets"></a>

```go
func PreferredMajorTargets() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredUpgradeTargets`<sup>Required</sup> <a name="PreferredUpgradeTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredUpgradeTargets"></a>

```go
func PreferredUpgradeTargets() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredVersions`<sup>Required</sup> <a name="PreferredVersions" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredVersions"></a>

```go
func PreferredVersions() *[]*string
```

- *Type:* *[]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNeptuneEngineVersionConfig <a name="DataAwsNeptuneEngineVersionConfig" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/dataawsneptuneengineversion"

&dataawsneptuneengineversion.DataAwsNeptuneEngineVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultOnly: interface{},
	Engine: *string,
	HasMajorTarget: interface{},
	HasMinorTarget: interface{},
	Id: *string,
	Latest: interface{},
	ParameterGroupFamily: *string,
	PreferredMajorTargets: *[]*string,
	PreferredUpgradeTargets: *[]*string,
	PreferredVersions: *[]*string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.defaultOnly">DefaultOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#default_only DataAwsNeptuneEngineVersion#default_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#engine DataAwsNeptuneEngineVersion#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.hasMajorTarget">HasMajorTarget</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#has_major_target DataAwsNeptuneEngineVersion#has_major_target}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.hasMinorTarget">HasMinorTarget</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#has_minor_target DataAwsNeptuneEngineVersion#has_minor_target}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#id DataAwsNeptuneEngineVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.latest">Latest</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#latest DataAwsNeptuneEngineVersion#latest}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.parameterGroupFamily">ParameterGroupFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#parameter_group_family DataAwsNeptuneEngineVersion#parameter_group_family}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredMajorTargets">PreferredMajorTargets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#preferred_major_targets DataAwsNeptuneEngineVersion#preferred_major_targets}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredUpgradeTargets">PreferredUpgradeTargets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#preferred_upgrade_targets DataAwsNeptuneEngineVersion#preferred_upgrade_targets}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredVersions">PreferredVersions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#preferred_versions DataAwsNeptuneEngineVersion#preferred_versions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#version DataAwsNeptuneEngineVersion#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultOnly`<sup>Optional</sup> <a name="DefaultOnly" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.defaultOnly"></a>

```go
DefaultOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#default_only DataAwsNeptuneEngineVersion#default_only}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#engine DataAwsNeptuneEngineVersion#engine}.

---

##### `HasMajorTarget`<sup>Optional</sup> <a name="HasMajorTarget" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.hasMajorTarget"></a>

```go
HasMajorTarget interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#has_major_target DataAwsNeptuneEngineVersion#has_major_target}.

---

##### `HasMinorTarget`<sup>Optional</sup> <a name="HasMinorTarget" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.hasMinorTarget"></a>

```go
HasMinorTarget interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#has_minor_target DataAwsNeptuneEngineVersion#has_minor_target}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#id DataAwsNeptuneEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Latest`<sup>Optional</sup> <a name="Latest" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.latest"></a>

```go
Latest interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#latest DataAwsNeptuneEngineVersion#latest}.

---

##### `ParameterGroupFamily`<sup>Optional</sup> <a name="ParameterGroupFamily" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.parameterGroupFamily"></a>

```go
ParameterGroupFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#parameter_group_family DataAwsNeptuneEngineVersion#parameter_group_family}.

---

##### `PreferredMajorTargets`<sup>Optional</sup> <a name="PreferredMajorTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredMajorTargets"></a>

```go
PreferredMajorTargets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#preferred_major_targets DataAwsNeptuneEngineVersion#preferred_major_targets}.

---

##### `PreferredUpgradeTargets`<sup>Optional</sup> <a name="PreferredUpgradeTargets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredUpgradeTargets"></a>

```go
PreferredUpgradeTargets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#preferred_upgrade_targets DataAwsNeptuneEngineVersion#preferred_upgrade_targets}.

---

##### `PreferredVersions`<sup>Optional</sup> <a name="PreferredVersions" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredVersions"></a>

```go
PreferredVersions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#preferred_versions DataAwsNeptuneEngineVersion#preferred_versions}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/neptune_engine_version#version DataAwsNeptuneEngineVersion#version}.

---



