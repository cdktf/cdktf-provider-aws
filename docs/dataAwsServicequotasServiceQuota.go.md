# `dataAwsServicequotasServiceQuota` Submodule <a name="`dataAwsServicequotasServiceQuota` Submodule" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicequotasServiceQuota <a name="DataAwsServicequotasServiceQuota" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/data-sources/servicequotas_service_quota aws_servicequotas_service_quota}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsservicequotasservicequota"

dataawsservicequotasservicequota.NewDataAwsServicequotasServiceQuota(scope Construct, id *string, config DataAwsServicequotasServiceQuotaConfig) DataAwsServicequotasServiceQuota
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig">DataAwsServicequotasServiceQuotaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig">DataAwsServicequotasServiceQuotaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetQuotaCode">ResetQuotaCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetQuotaName">ResetQuotaName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetId"></a>

```go
func ResetId()
```

##### `ResetQuotaCode` <a name="ResetQuotaCode" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetQuotaCode"></a>

```go
func ResetQuotaCode()
```

##### `ResetQuotaName` <a name="ResetQuotaName" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetQuotaName"></a>

```go
func ResetQuotaName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsServicequotasServiceQuota resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsservicequotasservicequota"

dataawsservicequotasservicequota.DataAwsServicequotasServiceQuota_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsservicequotasservicequota"

dataawsservicequotasservicequota.DataAwsServicequotasServiceQuota_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsservicequotasservicequota"

dataawsservicequotasservicequota.DataAwsServicequotasServiceQuota_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsservicequotasservicequota"

dataawsservicequotasservicequota.DataAwsServicequotasServiceQuota_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsServicequotasServiceQuota resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsServicequotasServiceQuota to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsServicequotasServiceQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/data-sources/servicequotas_service_quota#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsServicequotasServiceQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.adjustable">Adjustable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.defaultValue">DefaultValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.globalQuota">GlobalQuota</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.usageMetric">UsageMetric</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList">DataAwsServicequotasServiceQuotaUsageMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaCodeInput">QuotaCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaNameInput">QuotaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceCodeInput">ServiceCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaCode">QuotaCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaName">QuotaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceCode">ServiceCode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Adjustable`<sup>Required</sup> <a name="Adjustable" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.adjustable"></a>

```go
func Adjustable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.defaultValue"></a>

```go
func DefaultValue() *f64
```

- *Type:* *f64

---

##### `GlobalQuota`<sup>Required</sup> <a name="GlobalQuota" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.globalQuota"></a>

```go
func GlobalQuota() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `UsageMetric`<sup>Required</sup> <a name="UsageMetric" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.usageMetric"></a>

```go
func UsageMetric() DataAwsServicequotasServiceQuotaUsageMetricList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList">DataAwsServicequotasServiceQuotaUsageMetricList</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `QuotaCodeInput`<sup>Optional</sup> <a name="QuotaCodeInput" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaCodeInput"></a>

```go
func QuotaCodeInput() *string
```

- *Type:* *string

---

##### `QuotaNameInput`<sup>Optional</sup> <a name="QuotaNameInput" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaNameInput"></a>

```go
func QuotaNameInput() *string
```

- *Type:* *string

---

##### `ServiceCodeInput`<sup>Optional</sup> <a name="ServiceCodeInput" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceCodeInput"></a>

```go
func ServiceCodeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `QuotaCode`<sup>Required</sup> <a name="QuotaCode" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaCode"></a>

```go
func QuotaCode() *string
```

- *Type:* *string

---

##### `QuotaName`<sup>Required</sup> <a name="QuotaName" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaName"></a>

```go
func QuotaName() *string
```

- *Type:* *string

---

##### `ServiceCode`<sup>Required</sup> <a name="ServiceCode" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceCode"></a>

```go
func ServiceCode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicequotasServiceQuotaConfig <a name="DataAwsServicequotasServiceQuotaConfig" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsservicequotasservicequota"

&dataawsservicequotasservicequota.DataAwsServicequotasServiceQuotaConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ServiceCode: *string,
	Id: *string,
	QuotaCode: *string,
	QuotaName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.serviceCode">ServiceCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/data-sources/servicequotas_service_quota#service_code DataAwsServicequotasServiceQuota#service_code}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/data-sources/servicequotas_service_quota#id DataAwsServicequotasServiceQuota#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.quotaCode">QuotaCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/data-sources/servicequotas_service_quota#quota_code DataAwsServicequotasServiceQuota#quota_code}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.quotaName">QuotaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/data-sources/servicequotas_service_quota#quota_name DataAwsServicequotasServiceQuota#quota_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceCode`<sup>Required</sup> <a name="ServiceCode" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.serviceCode"></a>

```go
ServiceCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/data-sources/servicequotas_service_quota#service_code DataAwsServicequotasServiceQuota#service_code}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/data-sources/servicequotas_service_quota#id DataAwsServicequotasServiceQuota#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `QuotaCode`<sup>Optional</sup> <a name="QuotaCode" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.quotaCode"></a>

```go
QuotaCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/data-sources/servicequotas_service_quota#quota_code DataAwsServicequotasServiceQuota#quota_code}.

---

##### `QuotaName`<sup>Optional</sup> <a name="QuotaName" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.quotaName"></a>

```go
QuotaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.29.0/docs/data-sources/servicequotas_service_quota#quota_name DataAwsServicequotasServiceQuota#quota_name}.

---

### DataAwsServicequotasServiceQuotaUsageMetric <a name="DataAwsServicequotasServiceQuotaUsageMetric" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetric.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsservicequotasservicequota"

&dataawsservicequotasservicequota.DataAwsServicequotasServiceQuotaUsageMetric {

}
```


### DataAwsServicequotasServiceQuotaUsageMetricMetricDimensions <a name="DataAwsServicequotasServiceQuotaUsageMetricMetricDimensions" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsservicequotasservicequota"

&dataawsservicequotasservicequota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsServicequotasServiceQuotaUsageMetricList <a name="DataAwsServicequotasServiceQuotaUsageMetricList" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsservicequotasservicequota"

dataawsservicequotasservicequota.NewDataAwsServicequotasServiceQuotaUsageMetricList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsServicequotasServiceQuotaUsageMetricList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.get"></a>

```go
func Get(index *f64) DataAwsServicequotasServiceQuotaUsageMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList <a name="DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsservicequotasservicequota"

dataawsservicequotasservicequota.NewDataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.get"></a>

```go
func Get(index *f64) DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference <a name="DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsservicequotasservicequota"

dataawsservicequotasservicequota.NewDataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.class">Class</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensions">DataAwsServicequotasServiceQuotaUsageMetricMetricDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Class`<sup>Required</sup> <a name="Class" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.class"></a>

```go
func Class() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsServicequotasServiceQuotaUsageMetricMetricDimensions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensions">DataAwsServicequotasServiceQuotaUsageMetricMetricDimensions</a>

---


### DataAwsServicequotasServiceQuotaUsageMetricOutputReference <a name="DataAwsServicequotasServiceQuotaUsageMetricOutputReference" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/dataawsservicequotasservicequota"

dataawsservicequotasservicequota.NewDataAwsServicequotasServiceQuotaUsageMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsServicequotasServiceQuotaUsageMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.property.metricDimensions">MetricDimensions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList">DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.property.metricNamespace">MetricNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.property.metricStatisticRecommendation">MetricStatisticRecommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetric">DataAwsServicequotasServiceQuotaUsageMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricDimensions`<sup>Required</sup> <a name="MetricDimensions" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.property.metricDimensions"></a>

```go
func MetricDimensions() DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList">DataAwsServicequotasServiceQuotaUsageMetricMetricDimensionsList</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `MetricNamespace`<sup>Required</sup> <a name="MetricNamespace" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.property.metricNamespace"></a>

```go
func MetricNamespace() *string
```

- *Type:* *string

---

##### `MetricStatisticRecommendation`<sup>Required</sup> <a name="MetricStatisticRecommendation" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.property.metricStatisticRecommendation"></a>

```go
func MetricStatisticRecommendation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsServicequotasServiceQuotaUsageMetric
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaUsageMetric">DataAwsServicequotasServiceQuotaUsageMetric</a>

---



