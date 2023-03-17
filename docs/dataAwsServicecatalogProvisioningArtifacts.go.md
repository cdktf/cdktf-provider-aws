# `dataAwsServicecatalogProvisioningArtifacts` Submodule <a name="`dataAwsServicecatalogProvisioningArtifacts` Submodule" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicecatalogProvisioningArtifacts <a name="DataAwsServicecatalogProvisioningArtifacts" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_provisioning_artifacts aws_servicecatalog_provisioning_artifacts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsservicecatalogprovisioningartifacts"

dataawsservicecatalogprovisioningartifacts.NewDataAwsServicecatalogProvisioningArtifacts(scope Construct, id *string, config DataAwsServicecatalogProvisioningArtifactsConfig) DataAwsServicecatalogProvisioningArtifacts
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig">DataAwsServicecatalogProvisioningArtifactsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig">DataAwsServicecatalogProvisioningArtifactsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.putTimeouts"></a>

```go
func PutTimeouts(value DataAwsServicecatalogProvisioningArtifactsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts">DataAwsServicecatalogProvisioningArtifactsTimeouts</a>

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.resetAcceptLanguage"></a>

```go
func ResetAcceptLanguage()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsservicecatalogprovisioningartifacts"

dataawsservicecatalogprovisioningartifacts.DataAwsServicecatalogProvisioningArtifacts_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsservicecatalogprovisioningartifacts"

dataawsservicecatalogprovisioningartifacts.DataAwsServicecatalogProvisioningArtifacts_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsservicecatalogprovisioningartifacts"

dataawsservicecatalogprovisioningartifacts.DataAwsServicecatalogProvisioningArtifacts_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.provisioningArtifactDetails">ProvisioningArtifactDetails</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList">DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference">DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.productIdInput">ProductIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ProvisioningArtifactDetails`<sup>Required</sup> <a name="ProvisioningArtifactDetails" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.provisioningArtifactDetails"></a>

```go
func ProvisioningArtifactDetails() DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList">DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.timeouts"></a>

```go
func Timeouts() DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference">DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference</a>

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.acceptLanguageInput"></a>

```go
func AcceptLanguageInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.productIdInput"></a>

```go
func ProductIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.acceptLanguage"></a>

```go
func AcceptLanguage() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicecatalogProvisioningArtifactsConfig <a name="DataAwsServicecatalogProvisioningArtifactsConfig" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsservicecatalogprovisioningartifacts"

&dataawsservicecatalogprovisioningartifacts.DataAwsServicecatalogProvisioningArtifactsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProductId: *string,
	AcceptLanguage: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.productId">ProductId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_provisioning_artifacts#product_id DataAwsServicecatalogProvisioningArtifacts#product_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_provisioning_artifacts#accept_language DataAwsServicecatalogProvisioningArtifacts#accept_language}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_provisioning_artifacts#id DataAwsServicecatalogProvisioningArtifacts#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts">DataAwsServicecatalogProvisioningArtifactsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.productId"></a>

```go
ProductId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_provisioning_artifacts#product_id DataAwsServicecatalogProvisioningArtifacts#product_id}.

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.acceptLanguage"></a>

```go
AcceptLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_provisioning_artifacts#accept_language DataAwsServicecatalogProvisioningArtifacts#accept_language}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_provisioning_artifacts#id DataAwsServicecatalogProvisioningArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.timeouts"></a>

```go
Timeouts DataAwsServicecatalogProvisioningArtifactsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts">DataAwsServicecatalogProvisioningArtifactsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_provisioning_artifacts#timeouts DataAwsServicecatalogProvisioningArtifacts#timeouts}

---

### DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails <a name="DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsservicecatalogprovisioningartifacts"

&dataawsservicecatalogprovisioningartifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails {

}
```


### DataAwsServicecatalogProvisioningArtifactsTimeouts <a name="DataAwsServicecatalogProvisioningArtifactsTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsservicecatalogprovisioningartifacts"

&dataawsservicecatalogprovisioningartifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_provisioning_artifacts#read DataAwsServicecatalogProvisioningArtifacts#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_provisioning_artifacts#read DataAwsServicecatalogProvisioningArtifacts#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList <a name="DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsservicecatalogprovisioningartifacts"

dataawsservicecatalogprovisioningartifacts.NewDataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.get"></a>

```go
func Get(index *f64) DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference <a name="DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsservicecatalogprovisioningartifacts"

dataawsservicecatalogprovisioningartifacts.NewDataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.guidance">Guidance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails">DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Guidance`<sup>Required</sup> <a name="Guidance" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.guidance"></a>

```go
func Guidance() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails">DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails</a>

---


### DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference <a name="DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsservicecatalogprovisioningartifacts"

dataawsservicecatalogprovisioningartifacts.NewDataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



