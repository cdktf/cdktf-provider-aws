# `dataAwsAppconfigConfigurationProfiles` Submodule <a name="`dataAwsAppconfigConfigurationProfiles` Submodule" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAppconfigConfigurationProfiles <a name="DataAwsAppconfigConfigurationProfiles" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appconfig_configuration_profiles aws_appconfig_configuration_profiles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsappconfigconfigurationprofiles"

dataawsappconfigconfigurationprofiles.NewDataAwsAppconfigConfigurationProfiles(scope Construct, id *string, config DataAwsAppconfigConfigurationProfilesConfig) DataAwsAppconfigConfigurationProfiles
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig">DataAwsAppconfigConfigurationProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig">DataAwsAppconfigConfigurationProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsAppconfigConfigurationProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsappconfigconfigurationprofiles"

dataawsappconfigconfigurationprofiles.DataAwsAppconfigConfigurationProfiles_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsappconfigconfigurationprofiles"

dataawsappconfigconfigurationprofiles.DataAwsAppconfigConfigurationProfiles_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsappconfigconfigurationprofiles"

dataawsappconfigconfigurationprofiles.DataAwsAppconfigConfigurationProfiles_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsappconfigconfigurationprofiles"

dataawsappconfigconfigurationprofiles.DataAwsAppconfigConfigurationProfiles_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsAppconfigConfigurationProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsAppconfigConfigurationProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsAppconfigConfigurationProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appconfig_configuration_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsAppconfigConfigurationProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.configurationProfileIds">ConfigurationProfileIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ConfigurationProfileIds`<sup>Required</sup> <a name="ConfigurationProfileIds" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.configurationProfileIds"></a>

```go
func ConfigurationProfileIds() *[]*string
```

- *Type:* *[]*string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfiles.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAppconfigConfigurationProfilesConfig <a name="DataAwsAppconfigConfigurationProfilesConfig" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/dataawsappconfigconfigurationprofiles"

&dataawsappconfigconfigurationprofiles.DataAwsAppconfigConfigurationProfilesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	Id: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appconfig_configuration_profiles#application_id DataAwsAppconfigConfigurationProfiles#application_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appconfig_configuration_profiles#id DataAwsAppconfigConfigurationProfiles#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appconfig_configuration_profiles#application_id DataAwsAppconfigConfigurationProfiles#application_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appconfig_configuration_profiles#id DataAwsAppconfigConfigurationProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfiles.DataAwsAppconfigConfigurationProfilesConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/appconfig_configuration_profiles#region DataAwsAppconfigConfigurationProfiles#region}

---



