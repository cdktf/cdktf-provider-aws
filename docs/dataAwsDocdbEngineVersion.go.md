# `dataAwsDocdbEngineVersion` Submodule <a name="`dataAwsDocdbEngineVersion` Submodule" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDocdbEngineVersion <a name="DataAwsDocdbEngineVersion" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version aws_docdb_engine_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdocdbengineversion"

dataawsdocdbengineversion.NewDataAwsDocdbEngineVersion(scope Construct, id *string, config DataAwsDocdbEngineVersionConfig) DataAwsDocdbEngineVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig">DataAwsDocdbEngineVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig">DataAwsDocdbEngineVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetParameterGroupFamily">ResetParameterGroupFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetPreferredVersions">ResetPreferredVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetParameterGroupFamily` <a name="ResetParameterGroupFamily" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetParameterGroupFamily"></a>

```go
func ResetParameterGroupFamily()
```

##### `ResetPreferredVersions` <a name="ResetPreferredVersions" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetPreferredVersions"></a>

```go
func ResetPreferredVersions()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdocdbengineversion"

dataawsdocdbengineversion.DataAwsDocdbEngineVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdocdbengineversion"

dataawsdocdbengineversion.DataAwsDocdbEngineVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdocdbengineversion"

dataawsdocdbengineversion.DataAwsDocdbEngineVersion_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.engineDescription">EngineDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.exportableLogTypes">ExportableLogTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.supportsLogExportsToCloudwatch">SupportsLogExportsToCloudwatch</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.validUpgradeTargets">ValidUpgradeTargets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.versionDescription">VersionDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.parameterGroupFamilyInput">ParameterGroupFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.preferredVersionsInput">PreferredVersionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.parameterGroupFamily">ParameterGroupFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.preferredVersions">PreferredVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `EngineDescription`<sup>Required</sup> <a name="EngineDescription" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.engineDescription"></a>

```go
func EngineDescription() *string
```

- *Type:* *string

---

##### `ExportableLogTypes`<sup>Required</sup> <a name="ExportableLogTypes" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.exportableLogTypes"></a>

```go
func ExportableLogTypes() *[]*string
```

- *Type:* *[]*string

---

##### `SupportsLogExportsToCloudwatch`<sup>Required</sup> <a name="SupportsLogExportsToCloudwatch" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.supportsLogExportsToCloudwatch"></a>

```go
func SupportsLogExportsToCloudwatch() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ValidUpgradeTargets`<sup>Required</sup> <a name="ValidUpgradeTargets" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.validUpgradeTargets"></a>

```go
func ValidUpgradeTargets() *[]*string
```

- *Type:* *[]*string

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.versionDescription"></a>

```go
func VersionDescription() *string
```

- *Type:* *string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParameterGroupFamilyInput`<sup>Optional</sup> <a name="ParameterGroupFamilyInput" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.parameterGroupFamilyInput"></a>

```go
func ParameterGroupFamilyInput() *string
```

- *Type:* *string

---

##### `PreferredVersionsInput`<sup>Optional</sup> <a name="PreferredVersionsInput" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.preferredVersionsInput"></a>

```go
func PreferredVersionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ParameterGroupFamily`<sup>Required</sup> <a name="ParameterGroupFamily" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.parameterGroupFamily"></a>

```go
func ParameterGroupFamily() *string
```

- *Type:* *string

---

##### `PreferredVersions`<sup>Required</sup> <a name="PreferredVersions" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.preferredVersions"></a>

```go
func PreferredVersions() *[]*string
```

- *Type:* *[]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDocdbEngineVersionConfig <a name="DataAwsDocdbEngineVersionConfig" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsdocdbengineversion"

&dataawsdocdbengineversion.DataAwsDocdbEngineVersionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Engine: *string,
	Id: *string,
	ParameterGroupFamily: *string,
	PreferredVersions: *[]*string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version#engine DataAwsDocdbEngineVersion#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version#id DataAwsDocdbEngineVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.parameterGroupFamily">ParameterGroupFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version#parameter_group_family DataAwsDocdbEngineVersion#parameter_group_family}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.preferredVersions">PreferredVersions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version#preferred_versions DataAwsDocdbEngineVersion#preferred_versions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version#version DataAwsDocdbEngineVersion#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version#engine DataAwsDocdbEngineVersion#engine}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version#id DataAwsDocdbEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParameterGroupFamily`<sup>Optional</sup> <a name="ParameterGroupFamily" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.parameterGroupFamily"></a>

```go
ParameterGroupFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version#parameter_group_family DataAwsDocdbEngineVersion#parameter_group_family}.

---

##### `PreferredVersions`<sup>Optional</sup> <a name="PreferredVersions" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.preferredVersions"></a>

```go
PreferredVersions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version#preferred_versions DataAwsDocdbEngineVersion#preferred_versions}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsDocdbEngineVersion.DataAwsDocdbEngineVersionConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/docdb_engine_version#version DataAwsDocdbEngineVersion#version}.

---



