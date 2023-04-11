# `dataAwsLicensemanagerReceivedLicense` Submodule <a name="`dataAwsLicensemanagerReceivedLicense` Submodule" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLicensemanagerReceivedLicense <a name="DataAwsLicensemanagerReceivedLicense" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/licensemanager_received_license aws_licensemanager_received_license}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicense(scope Construct, id *string, config DataAwsLicensemanagerReceivedLicenseConfig) DataAwsLicensemanagerReceivedLicense
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig">DataAwsLicensemanagerReceivedLicenseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig">DataAwsLicensemanagerReceivedLicenseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.DataAwsLicensemanagerReceivedLicense_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.DataAwsLicensemanagerReceivedLicense_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.DataAwsLicensemanagerReceivedLicense_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.beneficiary">Beneficiary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.consumptionConfiguration">ConsumptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.entitlements">Entitlements</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList">DataAwsLicensemanagerReceivedLicenseEntitlementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.homeRegion">HomeRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.issuer">Issuer</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList">DataAwsLicensemanagerReceivedLicenseIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseMetadata">LicenseMetadata</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList">DataAwsLicensemanagerReceivedLicenseLicenseMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseName">LicenseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.productName">ProductName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.productSku">ProductSku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.receivedMetadata">ReceivedMetadata</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList">DataAwsLicensemanagerReceivedLicenseReceivedMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.validity">Validity</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList">DataAwsLicensemanagerReceivedLicenseValidityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseArnInput">LicenseArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseArn">LicenseArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Beneficiary`<sup>Required</sup> <a name="Beneficiary" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.beneficiary"></a>

```go
func Beneficiary() *string
```

- *Type:* *string

---

##### `ConsumptionConfiguration`<sup>Required</sup> <a name="ConsumptionConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.consumptionConfiguration"></a>

```go
func ConsumptionConfiguration() DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Entitlements`<sup>Required</sup> <a name="Entitlements" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.entitlements"></a>

```go
func Entitlements() DataAwsLicensemanagerReceivedLicenseEntitlementsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList">DataAwsLicensemanagerReceivedLicenseEntitlementsList</a>

---

##### `HomeRegion`<sup>Required</sup> <a name="HomeRegion" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.homeRegion"></a>

```go
func HomeRegion() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.issuer"></a>

```go
func Issuer() DataAwsLicensemanagerReceivedLicenseIssuerList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList">DataAwsLicensemanagerReceivedLicenseIssuerList</a>

---

##### `LicenseMetadata`<sup>Required</sup> <a name="LicenseMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseMetadata"></a>

```go
func LicenseMetadata() DataAwsLicensemanagerReceivedLicenseLicenseMetadataList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList">DataAwsLicensemanagerReceivedLicenseLicenseMetadataList</a>

---

##### `LicenseName`<sup>Required</sup> <a name="LicenseName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseName"></a>

```go
func LicenseName() *string
```

- *Type:* *string

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.productName"></a>

```go
func ProductName() *string
```

- *Type:* *string

---

##### `ProductSku`<sup>Required</sup> <a name="ProductSku" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.productSku"></a>

```go
func ProductSku() *string
```

- *Type:* *string

---

##### `ReceivedMetadata`<sup>Required</sup> <a name="ReceivedMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.receivedMetadata"></a>

```go
func ReceivedMetadata() DataAwsLicensemanagerReceivedLicenseReceivedMetadataList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList">DataAwsLicensemanagerReceivedLicenseReceivedMetadataList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.validity"></a>

```go
func Validity() DataAwsLicensemanagerReceivedLicenseValidityList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList">DataAwsLicensemanagerReceivedLicenseValidityList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicenseArnInput`<sup>Optional</sup> <a name="LicenseArnInput" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseArnInput"></a>

```go
func LicenseArnInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseArn`<sup>Required</sup> <a name="LicenseArn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.licenseArn"></a>

```go
func LicenseArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicense.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLicensemanagerReceivedLicenseConfig <a name="DataAwsLicensemanagerReceivedLicenseConfig" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

&dataawslicensemanagerreceivedlicense.DataAwsLicensemanagerReceivedLicenseConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LicenseArn: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.licenseArn">LicenseArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/licensemanager_received_license#license_arn DataAwsLicensemanagerReceivedLicense#license_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/licensemanager_received_license#id DataAwsLicensemanagerReceivedLicense#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LicenseArn`<sup>Required</sup> <a name="LicenseArn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.licenseArn"></a>

```go
LicenseArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/licensemanager_received_license#license_arn DataAwsLicensemanagerReceivedLicense#license_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/licensemanager_received_license#id DataAwsLicensemanagerReceivedLicense#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

&dataawslicensemanagerreceivedlicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration {

}
```


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

&dataawslicensemanagerreceivedlicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration {

}
```


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

&dataawslicensemanagerreceivedlicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration {

}
```


### DataAwsLicensemanagerReceivedLicenseEntitlements <a name="DataAwsLicensemanagerReceivedLicenseEntitlements" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlements.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

&dataawslicensemanagerreceivedlicense.DataAwsLicensemanagerReceivedLicenseEntitlements {

}
```


### DataAwsLicensemanagerReceivedLicenseIssuer <a name="DataAwsLicensemanagerReceivedLicenseIssuer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

&dataawslicensemanagerreceivedlicense.DataAwsLicensemanagerReceivedLicenseIssuer {

}
```


### DataAwsLicensemanagerReceivedLicenseLicenseMetadata <a name="DataAwsLicensemanagerReceivedLicenseLicenseMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

&dataawslicensemanagerreceivedlicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadata {

}
```


### DataAwsLicensemanagerReceivedLicenseReceivedMetadata <a name="DataAwsLicensemanagerReceivedLicenseReceivedMetadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

&dataawslicensemanagerreceivedlicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadata {

}
```


### DataAwsLicensemanagerReceivedLicenseValidity <a name="DataAwsLicensemanagerReceivedLicenseValidity" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

&dataawslicensemanagerreceivedlicense.DataAwsLicensemanagerReceivedLicenseValidity {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn">AllowEarlyCheckIn</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes">MaxTimeToLiveInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowEarlyCheckIn`<sup>Required</sup> <a name="AllowEarlyCheckIn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn"></a>

```go
func AllowEarlyCheckIn() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxTimeToLiveInMinutes`<sup>Required</sup> <a name="MaxTimeToLiveInMinutes" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```go
func MaxTimeToLiveInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration</a>

---


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration">BorrowConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration">ProvisionalConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.renewType">RenewType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BorrowConfiguration`<sup>Required</sup> <a name="BorrowConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration"></a>

```go
func BorrowConfiguration() DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList</a>

---

##### `ProvisionalConfiguration`<sup>Required</sup> <a name="ProvisionalConfiguration" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration"></a>

```go
func ProvisionalConfiguration() DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList</a>

---

##### `RenewType`<sup>Required</sup> <a name="RenewType" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.renewType"></a>

```go
func RenewType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration</a>

---


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference <a name="DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes">MaxTimeToLiveInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxTimeToLiveInMinutes`<sup>Required</sup> <a name="MaxTimeToLiveInMinutes" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```go
func MaxTimeToLiveInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration">DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration</a>

---


### DataAwsLicensemanagerReceivedLicenseEntitlementsList <a name="DataAwsLicensemanagerReceivedLicenseEntitlementsList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicenseEntitlementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLicensemanagerReceivedLicenseEntitlementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.get"></a>

```go
func Get(index *f64) DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference <a name="DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.allowCheckIn">AllowCheckIn</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.maxCount">MaxCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlements">DataAwsLicensemanagerReceivedLicenseEntitlements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowCheckIn`<sup>Required</sup> <a name="AllowCheckIn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.allowCheckIn"></a>

```go
func AllowCheckIn() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.maxCount"></a>

```go
func MaxCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLicensemanagerReceivedLicenseEntitlements
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseEntitlements">DataAwsLicensemanagerReceivedLicenseEntitlements</a>

---


### DataAwsLicensemanagerReceivedLicenseIssuerList <a name="DataAwsLicensemanagerReceivedLicenseIssuerList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicenseIssuerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLicensemanagerReceivedLicenseIssuerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.get"></a>

```go
func Get(index *f64) DataAwsLicensemanagerReceivedLicenseIssuerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLicensemanagerReceivedLicenseIssuerOutputReference <a name="DataAwsLicensemanagerReceivedLicenseIssuerOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicenseIssuerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLicensemanagerReceivedLicenseIssuerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.keyFingerprint">KeyFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.signKey">SignKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuer">DataAwsLicensemanagerReceivedLicenseIssuer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyFingerprint`<sup>Required</sup> <a name="KeyFingerprint" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.keyFingerprint"></a>

```go
func KeyFingerprint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignKey`<sup>Required</sup> <a name="SignKey" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.signKey"></a>

```go
func SignKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLicensemanagerReceivedLicenseIssuer
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseIssuer">DataAwsLicensemanagerReceivedLicenseIssuer</a>

---


### DataAwsLicensemanagerReceivedLicenseLicenseMetadataList <a name="DataAwsLicensemanagerReceivedLicenseLicenseMetadataList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicenseLicenseMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLicensemanagerReceivedLicenseLicenseMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.get"></a>

```go
func Get(index *f64) DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference <a name="DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadata">DataAwsLicensemanagerReceivedLicenseLicenseMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLicensemanagerReceivedLicenseLicenseMetadata
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseLicenseMetadata">DataAwsLicensemanagerReceivedLicenseLicenseMetadata</a>

---


### DataAwsLicensemanagerReceivedLicenseReceivedMetadataList <a name="DataAwsLicensemanagerReceivedLicenseReceivedMetadataList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicenseReceivedMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLicensemanagerReceivedLicenseReceivedMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.get"></a>

```go
func Get(index *f64) DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference <a name="DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.allowedOperations">AllowedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.receivedStatus">ReceivedStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.receivedStatusReason">ReceivedStatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadata">DataAwsLicensemanagerReceivedLicenseReceivedMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedOperations`<sup>Required</sup> <a name="AllowedOperations" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.allowedOperations"></a>

```go
func AllowedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `ReceivedStatus`<sup>Required</sup> <a name="ReceivedStatus" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.receivedStatus"></a>

```go
func ReceivedStatus() *string
```

- *Type:* *string

---

##### `ReceivedStatusReason`<sup>Required</sup> <a name="ReceivedStatusReason" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.receivedStatusReason"></a>

```go
func ReceivedStatusReason() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLicensemanagerReceivedLicenseReceivedMetadata
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseReceivedMetadata">DataAwsLicensemanagerReceivedLicenseReceivedMetadata</a>

---


### DataAwsLicensemanagerReceivedLicenseValidityList <a name="DataAwsLicensemanagerReceivedLicenseValidityList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicenseValidityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsLicensemanagerReceivedLicenseValidityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.get"></a>

```go
func Get(index *f64) DataAwsLicensemanagerReceivedLicenseValidityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsLicensemanagerReceivedLicenseValidityOutputReference <a name="DataAwsLicensemanagerReceivedLicenseValidityOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslicensemanagerreceivedlicense"

dataawslicensemanagerreceivedlicense.NewDataAwsLicensemanagerReceivedLicenseValidityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsLicensemanagerReceivedLicenseValidityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.begin">Begin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidity">DataAwsLicensemanagerReceivedLicenseValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Begin`<sup>Required</sup> <a name="Begin" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.begin"></a>

```go
func Begin() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsLicensemanagerReceivedLicenseValidity
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicense.DataAwsLicensemanagerReceivedLicenseValidity">DataAwsLicensemanagerReceivedLicenseValidity</a>

---



