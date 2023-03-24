# `servicecatalogProvisioningArtifact` Submodule <a name="`servicecatalogProvisioningArtifact` Submodule" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogProvisioningArtifact <a name="ServicecatalogProvisioningArtifact" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact aws_servicecatalog_provisioning_artifact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisioningartifact"

servicecatalogprovisioningartifact.NewServicecatalogProvisioningArtifact(scope Construct, id *string, config ServicecatalogProvisioningArtifactConfig) ServicecatalogProvisioningArtifact
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig">ServicecatalogProvisioningArtifactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig">ServicecatalogProvisioningArtifactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetDisableTemplateValidation">ResetDisableTemplateValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetGuidance">ResetGuidance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTemplatePhysicalId">ResetTemplatePhysicalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTemplateUrl">ResetTemplateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.putTimeouts"></a>

```go
func PutTimeouts(value ServicecatalogProvisioningArtifactTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a>

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetAcceptLanguage"></a>

```go
func ResetAcceptLanguage()
```

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetActive"></a>

```go
func ResetActive()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisableTemplateValidation` <a name="ResetDisableTemplateValidation" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetDisableTemplateValidation"></a>

```go
func ResetDisableTemplateValidation()
```

##### `ResetGuidance` <a name="ResetGuidance" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetGuidance"></a>

```go
func ResetGuidance()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetName"></a>

```go
func ResetName()
```

##### `ResetTemplatePhysicalId` <a name="ResetTemplatePhysicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTemplatePhysicalId"></a>

```go
func ResetTemplatePhysicalId()
```

##### `ResetTemplateUrl` <a name="ResetTemplateUrl" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTemplateUrl"></a>

```go
func ResetTemplateUrl()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisioningartifact"

servicecatalogprovisioningartifact.ServicecatalogProvisioningArtifact_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisioningartifact"

servicecatalogprovisioningartifact.ServicecatalogProvisioningArtifact_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisioningartifact"

servicecatalogprovisioningartifact.ServicecatalogProvisioningArtifact_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference">ServicecatalogProvisioningArtifactTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.activeInput">ActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.disableTemplateValidationInput">DisableTemplateValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.guidanceInput">GuidanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.productIdInput">ProductIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templatePhysicalIdInput">TemplatePhysicalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templateUrlInput">TemplateUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.active">Active</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.disableTemplateValidation">DisableTemplateValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.guidance">Guidance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templatePhysicalId">TemplatePhysicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templateUrl">TemplateUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.timeouts"></a>

```go
func Timeouts() ServicecatalogProvisioningArtifactTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference">ServicecatalogProvisioningArtifactTimeoutsOutputReference</a>

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.acceptLanguageInput"></a>

```go
func AcceptLanguageInput() *string
```

- *Type:* *string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.activeInput"></a>

```go
func ActiveInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisableTemplateValidationInput`<sup>Optional</sup> <a name="DisableTemplateValidationInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.disableTemplateValidationInput"></a>

```go
func DisableTemplateValidationInput() interface{}
```

- *Type:* interface{}

---

##### `GuidanceInput`<sup>Optional</sup> <a name="GuidanceInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.guidanceInput"></a>

```go
func GuidanceInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.productIdInput"></a>

```go
func ProductIdInput() *string
```

- *Type:* *string

---

##### `TemplatePhysicalIdInput`<sup>Optional</sup> <a name="TemplatePhysicalIdInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templatePhysicalIdInput"></a>

```go
func TemplatePhysicalIdInput() *string
```

- *Type:* *string

---

##### `TemplateUrlInput`<sup>Optional</sup> <a name="TemplateUrlInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templateUrlInput"></a>

```go
func TemplateUrlInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.acceptLanguage"></a>

```go
func AcceptLanguage() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.active"></a>

```go
func Active() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisableTemplateValidation`<sup>Required</sup> <a name="DisableTemplateValidation" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.disableTemplateValidation"></a>

```go
func DisableTemplateValidation() interface{}
```

- *Type:* interface{}

---

##### `Guidance`<sup>Required</sup> <a name="Guidance" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.guidance"></a>

```go
func Guidance() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

##### `TemplatePhysicalId`<sup>Required</sup> <a name="TemplatePhysicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templatePhysicalId"></a>

```go
func TemplatePhysicalId() *string
```

- *Type:* *string

---

##### `TemplateUrl`<sup>Required</sup> <a name="TemplateUrl" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templateUrl"></a>

```go
func TemplateUrl() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogProvisioningArtifactConfig <a name="ServicecatalogProvisioningArtifactConfig" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisioningartifact"

&servicecatalogprovisioningartifact.ServicecatalogProvisioningArtifactConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProductId: *string,
	AcceptLanguage: *string,
	Active: interface{},
	Description: *string,
	DisableTemplateValidation: interface{},
	Guidance: *string,
	Id: *string,
	Name: *string,
	TemplatePhysicalId: *string,
	TemplateUrl: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.productId">ProductId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#product_id ServicecatalogProvisioningArtifact#product_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#accept_language ServicecatalogProvisioningArtifact#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.active">Active</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#active ServicecatalogProvisioningArtifact#active}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#description ServicecatalogProvisioningArtifact#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.disableTemplateValidation">DisableTemplateValidation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#disable_template_validation ServicecatalogProvisioningArtifact#disable_template_validation}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.guidance">Guidance</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#guidance ServicecatalogProvisioningArtifact#guidance}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#id ServicecatalogProvisioningArtifact#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#name ServicecatalogProvisioningArtifact#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.templatePhysicalId">TemplatePhysicalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_physical_id ServicecatalogProvisioningArtifact#template_physical_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.templateUrl">TemplateUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_url ServicecatalogProvisioningArtifact#template_url}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#type ServicecatalogProvisioningArtifact#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.productId"></a>

```go
ProductId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#product_id ServicecatalogProvisioningArtifact#product_id}.

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.acceptLanguage"></a>

```go
AcceptLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#accept_language ServicecatalogProvisioningArtifact#accept_language}.

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.active"></a>

```go
Active interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#active ServicecatalogProvisioningArtifact#active}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#description ServicecatalogProvisioningArtifact#description}.

---

##### `DisableTemplateValidation`<sup>Optional</sup> <a name="DisableTemplateValidation" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.disableTemplateValidation"></a>

```go
DisableTemplateValidation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#disable_template_validation ServicecatalogProvisioningArtifact#disable_template_validation}.

---

##### `Guidance`<sup>Optional</sup> <a name="Guidance" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.guidance"></a>

```go
Guidance *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#guidance ServicecatalogProvisioningArtifact#guidance}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#id ServicecatalogProvisioningArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#name ServicecatalogProvisioningArtifact#name}.

---

##### `TemplatePhysicalId`<sup>Optional</sup> <a name="TemplatePhysicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.templatePhysicalId"></a>

```go
TemplatePhysicalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_physical_id ServicecatalogProvisioningArtifact#template_physical_id}.

---

##### `TemplateUrl`<sup>Optional</sup> <a name="TemplateUrl" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.templateUrl"></a>

```go
TemplateUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_url ServicecatalogProvisioningArtifact#template_url}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.timeouts"></a>

```go
Timeouts ServicecatalogProvisioningArtifactTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#timeouts ServicecatalogProvisioningArtifact#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#type ServicecatalogProvisioningArtifact#type}.

---

### ServicecatalogProvisioningArtifactTimeouts <a name="ServicecatalogProvisioningArtifactTimeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisioningartifact"

&servicecatalogprovisioningartifact.ServicecatalogProvisioningArtifactTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#create ServicecatalogProvisioningArtifact#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#delete ServicecatalogProvisioningArtifact#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#read ServicecatalogProvisioningArtifact#read}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#update ServicecatalogProvisioningArtifact#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#create ServicecatalogProvisioningArtifact#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#delete ServicecatalogProvisioningArtifact#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#read ServicecatalogProvisioningArtifact#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#update ServicecatalogProvisioningArtifact#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogProvisioningArtifactTimeoutsOutputReference <a name="ServicecatalogProvisioningArtifactTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogprovisioningartifact"

servicecatalogprovisioningartifact.NewServicecatalogProvisioningArtifactTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicecatalogProvisioningArtifactTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



