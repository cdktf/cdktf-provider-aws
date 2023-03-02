# `acmCertificate` Submodule <a name="`acmCertificate` Submodule" id="@cdktf/provider-aws.acmCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmCertificate <a name="AcmCertificate" id="@cdktf/provider-aws.acmCertificate.AcmCertificate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate aws_acm_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/acmcertificate"

acmcertificate.NewAcmCertificate(scope Construct, id *string, config AcmCertificateConfig) AcmCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig">AcmCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig">AcmCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.putValidationOption">PutValidationOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateAuthorityArn">ResetCertificateAuthorityArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateBody">ResetCertificateBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateChain">ResetCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetEarlyRenewalDuration">ResetEarlyRenewalDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetKeyAlgorithm">ResetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetSubjectAlternativeNames">ResetSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetValidationMethod">ResetValidationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.resetValidationOption">ResetValidationOption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutOptions` <a name="PutOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.putOptions"></a>

```go
func PutOptions(value AcmCertificateOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

---

##### `PutValidationOption` <a name="PutValidationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.putValidationOption"></a>

```go
func PutValidationOption(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.putValidationOption.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCertificateAuthorityArn` <a name="ResetCertificateAuthorityArn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateAuthorityArn"></a>

```go
func ResetCertificateAuthorityArn()
```

##### `ResetCertificateBody` <a name="ResetCertificateBody" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateBody"></a>

```go
func ResetCertificateBody()
```

##### `ResetCertificateChain` <a name="ResetCertificateChain" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetCertificateChain"></a>

```go
func ResetCertificateChain()
```

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetDomainName"></a>

```go
func ResetDomainName()
```

##### `ResetEarlyRenewalDuration` <a name="ResetEarlyRenewalDuration" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetEarlyRenewalDuration"></a>

```go
func ResetEarlyRenewalDuration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetId"></a>

```go
func ResetId()
```

##### `ResetKeyAlgorithm` <a name="ResetKeyAlgorithm" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetKeyAlgorithm"></a>

```go
func ResetKeyAlgorithm()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```

##### `ResetSubjectAlternativeNames` <a name="ResetSubjectAlternativeNames" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetSubjectAlternativeNames"></a>

```go
func ResetSubjectAlternativeNames()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetValidationMethod` <a name="ResetValidationMethod" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetValidationMethod"></a>

```go
func ResetValidationMethod()
```

##### `ResetValidationOption` <a name="ResetValidationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.resetValidationOption"></a>

```go
func ResetValidationOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/acmcertificate"

acmcertificate.AcmCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/acmcertificate"

acmcertificate.AcmCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/acmcertificate"

acmcertificate.AcmCertificate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainValidationOptions">DomainValidationOptions</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList">AcmCertificateDomainValidationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.notAfter">NotAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.notBefore">NotBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.options">Options</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference">AcmCertificateOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.pendingRenewal">PendingRenewal</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.renewalEligibility">RenewalEligibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.renewalSummary">RenewalSummary</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList">AcmCertificateRenewalSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationEmails">ValidationEmails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationOption">ValidationOption</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList">AcmCertificateValidationOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateAuthorityArnInput">CertificateAuthorityArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateBodyInput">CertificateBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateChainInput">CertificateChainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.earlyRenewalDurationInput">EarlyRenewalDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.subjectAlternativeNamesInput">SubjectAlternativeNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationMethodInput">ValidationMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationOptionInput">ValidationOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateBody">CertificateBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateChain">CertificateChain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.earlyRenewalDuration">EarlyRenewalDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationMethod">ValidationMethod</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DomainValidationOptions`<sup>Required</sup> <a name="DomainValidationOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainValidationOptions"></a>

```go
func DomainValidationOptions() AcmCertificateDomainValidationOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList">AcmCertificateDomainValidationOptionsList</a>

---

##### `NotAfter`<sup>Required</sup> <a name="NotAfter" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.notAfter"></a>

```go
func NotAfter() *string
```

- *Type:* *string

---

##### `NotBefore`<sup>Required</sup> <a name="NotBefore" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.notBefore"></a>

```go
func NotBefore() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.options"></a>

```go
func Options() AcmCertificateOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference">AcmCertificateOptionsOutputReference</a>

---

##### `PendingRenewal`<sup>Required</sup> <a name="PendingRenewal" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.pendingRenewal"></a>

```go
func PendingRenewal() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RenewalEligibility`<sup>Required</sup> <a name="RenewalEligibility" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.renewalEligibility"></a>

```go
func RenewalEligibility() *string
```

- *Type:* *string

---

##### `RenewalSummary`<sup>Required</sup> <a name="RenewalSummary" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.renewalSummary"></a>

```go
func RenewalSummary() AcmCertificateRenewalSummaryList
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList">AcmCertificateRenewalSummaryList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValidationEmails`<sup>Required</sup> <a name="ValidationEmails" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationEmails"></a>

```go
func ValidationEmails() *[]*string
```

- *Type:* *[]*string

---

##### `ValidationOption`<sup>Required</sup> <a name="ValidationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationOption"></a>

```go
func ValidationOption() AcmCertificateValidationOptionList
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList">AcmCertificateValidationOptionList</a>

---

##### `CertificateAuthorityArnInput`<sup>Optional</sup> <a name="CertificateAuthorityArnInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateAuthorityArnInput"></a>

```go
func CertificateAuthorityArnInput() *string
```

- *Type:* *string

---

##### `CertificateBodyInput`<sup>Optional</sup> <a name="CertificateBodyInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateBodyInput"></a>

```go
func CertificateBodyInput() *string
```

- *Type:* *string

---

##### `CertificateChainInput`<sup>Optional</sup> <a name="CertificateChainInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateChainInput"></a>

```go
func CertificateChainInput() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `EarlyRenewalDurationInput`<sup>Optional</sup> <a name="EarlyRenewalDurationInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.earlyRenewalDurationInput"></a>

```go
func EarlyRenewalDurationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.keyAlgorithmInput"></a>

```go
func KeyAlgorithmInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.optionsInput"></a>

```go
func OptionsInput() AcmCertificateOptions
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `SubjectAlternativeNamesInput`<sup>Optional</sup> <a name="SubjectAlternativeNamesInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.subjectAlternativeNamesInput"></a>

```go
func SubjectAlternativeNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ValidationMethodInput`<sup>Optional</sup> <a name="ValidationMethodInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationMethodInput"></a>

```go
func ValidationMethodInput() *string
```

- *Type:* *string

---

##### `ValidationOptionInput`<sup>Optional</sup> <a name="ValidationOptionInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationOptionInput"></a>

```go
func ValidationOptionInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateAuthorityArn"></a>

```go
func CertificateAuthorityArn() *string
```

- *Type:* *string

---

##### `CertificateBody`<sup>Required</sup> <a name="CertificateBody" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateBody"></a>

```go
func CertificateBody() *string
```

- *Type:* *string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.certificateChain"></a>

```go
func CertificateChain() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `EarlyRenewalDuration`<sup>Required</sup> <a name="EarlyRenewalDuration" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.earlyRenewalDuration"></a>

```go
func EarlyRenewalDuration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.keyAlgorithm"></a>

```go
func KeyAlgorithm() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.subjectAlternativeNames"></a>

```go
func SubjectAlternativeNames() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ValidationMethod`<sup>Required</sup> <a name="ValidationMethod" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.validationMethod"></a>

```go
func ValidationMethod() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.acmCertificate.AcmCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AcmCertificateConfig <a name="AcmCertificateConfig" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/acmcertificate"

&acmcertificate.AcmCertificateConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CertificateAuthorityArn: *string,
	CertificateBody: *string,
	CertificateChain: *string,
	DomainName: *string,
	EarlyRenewalDuration: *string,
	Id: *string,
	KeyAlgorithm: *string,
	Options: github.com/cdktf/cdktf-provider-aws-go/aws.acmCertificate.AcmCertificateOptions,
	PrivateKey: *string,
	SubjectAlternativeNames: *[]*string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	ValidationMethod: *string,
	ValidationOption: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateBody">CertificateBody</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_body AcmCertificate#certificate_body}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateChain">CertificateChain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_chain AcmCertificate#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.earlyRenewalDuration">EarlyRenewalDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#early_renewal_duration AcmCertificate#early_renewal_duration}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#id AcmCertificate#id}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#key_algorithm AcmCertificate#key_algorithm}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.options">Options</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#private_key AcmCertificate#private_key}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags AcmCertificate#tags}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags_all AcmCertificate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.validationMethod">ValidationMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_method AcmCertificate#validation_method}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.validationOption">ValidationOption</a></code> | <code>interface{}</code> | validation_option block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateAuthorityArn`<sup>Optional</sup> <a name="CertificateAuthorityArn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateAuthorityArn"></a>

```go
CertificateAuthorityArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}.

---

##### `CertificateBody`<sup>Optional</sup> <a name="CertificateBody" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateBody"></a>

```go
CertificateBody *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_body AcmCertificate#certificate_body}.

---

##### `CertificateChain`<sup>Optional</sup> <a name="CertificateChain" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.certificateChain"></a>

```go
CertificateChain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_chain AcmCertificate#certificate_chain}.

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}.

---

##### `EarlyRenewalDuration`<sup>Optional</sup> <a name="EarlyRenewalDuration" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.earlyRenewalDuration"></a>

```go
EarlyRenewalDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#early_renewal_duration AcmCertificate#early_renewal_duration}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#id AcmCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyAlgorithm`<sup>Optional</sup> <a name="KeyAlgorithm" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.keyAlgorithm"></a>

```go
KeyAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#key_algorithm AcmCertificate#key_algorithm}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.options"></a>

```go
Options AcmCertificateOptions
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#options AcmCertificate#options}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#private_key AcmCertificate#private_key}.

---

##### `SubjectAlternativeNames`<sup>Optional</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.subjectAlternativeNames"></a>

```go
SubjectAlternativeNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags AcmCertificate#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#tags_all AcmCertificate#tags_all}.

---

##### `ValidationMethod`<sup>Optional</sup> <a name="ValidationMethod" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.validationMethod"></a>

```go
ValidationMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_method AcmCertificate#validation_method}.

---

##### `ValidationOption`<sup>Optional</sup> <a name="ValidationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificateConfig.property.validationOption"></a>

```go
ValidationOption interface{}
```

- *Type:* interface{}

validation_option block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_option AcmCertificate#validation_option}

---

### AcmCertificateDomainValidationOptions <a name="AcmCertificateDomainValidationOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/acmcertificate"

&acmcertificate.AcmCertificateDomainValidationOptions {

}
```


### AcmCertificateOptions <a name="AcmCertificateOptions" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/acmcertificate"

&acmcertificate.AcmCertificateOptions {
	CertificateTransparencyLoggingPreference: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions.property.certificateTransparencyLoggingPreference">CertificateTransparencyLoggingPreference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_transparency_logging_preference AcmCertificate#certificate_transparency_logging_preference}. |

---

##### `CertificateTransparencyLoggingPreference`<sup>Optional</sup> <a name="CertificateTransparencyLoggingPreference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptions.property.certificateTransparencyLoggingPreference"></a>

```go
CertificateTransparencyLoggingPreference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#certificate_transparency_logging_preference AcmCertificate#certificate_transparency_logging_preference}.

---

### AcmCertificateRenewalSummary <a name="AcmCertificateRenewalSummary" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummary.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/acmcertificate"

&acmcertificate.AcmCertificateRenewalSummary {

}
```


### AcmCertificateValidationOption <a name="AcmCertificateValidationOption" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/acmcertificate"

&acmcertificate.AcmCertificateValidationOption {
	DomainName: *string,
	ValidationDomain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.property.validationDomain">ValidationDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_domain AcmCertificate#validation_domain}. |

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#domain_name AcmCertificate#domain_name}.

---

##### `ValidationDomain`<sup>Required</sup> <a name="ValidationDomain" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOption.property.validationDomain"></a>

```go
ValidationDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acm_certificate#validation_domain AcmCertificate#validation_domain}.

---

## Classes <a name="Classes" id="Classes"></a>

### AcmCertificateDomainValidationOptionsList <a name="AcmCertificateDomainValidationOptionsList" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/acmcertificate"

acmcertificate.NewAcmCertificateDomainValidationOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AcmCertificateDomainValidationOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.get"></a>

```go
func Get(index *f64) AcmCertificateDomainValidationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AcmCertificateDomainValidationOptionsOutputReference <a name="AcmCertificateDomainValidationOptionsOutputReference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/acmcertificate"

acmcertificate.NewAcmCertificateDomainValidationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AcmCertificateDomainValidationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordName">ResourceRecordName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordType">ResourceRecordType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordValue">ResourceRecordValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptions">AcmCertificateDomainValidationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `ResourceRecordName`<sup>Required</sup> <a name="ResourceRecordName" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordName"></a>

```go
func ResourceRecordName() *string
```

- *Type:* *string

---

##### `ResourceRecordType`<sup>Required</sup> <a name="ResourceRecordType" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordType"></a>

```go
func ResourceRecordType() *string
```

- *Type:* *string

---

##### `ResourceRecordValue`<sup>Required</sup> <a name="ResourceRecordValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordValue"></a>

```go
func ResourceRecordValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() AcmCertificateDomainValidationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateDomainValidationOptions">AcmCertificateDomainValidationOptions</a>

---


### AcmCertificateOptionsOutputReference <a name="AcmCertificateOptionsOutputReference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/acmcertificate"

acmcertificate.NewAcmCertificateOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AcmCertificateOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resetCertificateTransparencyLoggingPreference">ResetCertificateTransparencyLoggingPreference</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateTransparencyLoggingPreference` <a name="ResetCertificateTransparencyLoggingPreference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.resetCertificateTransparencyLoggingPreference"></a>

```go
func ResetCertificateTransparencyLoggingPreference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreferenceInput">CertificateTransparencyLoggingPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreference">CertificateTransparencyLoggingPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateTransparencyLoggingPreferenceInput`<sup>Optional</sup> <a name="CertificateTransparencyLoggingPreferenceInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreferenceInput"></a>

```go
func CertificateTransparencyLoggingPreferenceInput() *string
```

- *Type:* *string

---

##### `CertificateTransparencyLoggingPreference`<sup>Required</sup> <a name="CertificateTransparencyLoggingPreference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreference"></a>

```go
func CertificateTransparencyLoggingPreference() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() AcmCertificateOptions
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

---


### AcmCertificateRenewalSummaryList <a name="AcmCertificateRenewalSummaryList" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/acmcertificate"

acmcertificate.NewAcmCertificateRenewalSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AcmCertificateRenewalSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.get"></a>

```go
func Get(index *f64) AcmCertificateRenewalSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### AcmCertificateRenewalSummaryOutputReference <a name="AcmCertificateRenewalSummaryOutputReference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/acmcertificate"

acmcertificate.NewAcmCertificateRenewalSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AcmCertificateRenewalSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.renewalStatus">RenewalStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.renewalStatusReason">RenewalStatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummary">AcmCertificateRenewalSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RenewalStatus`<sup>Required</sup> <a name="RenewalStatus" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.renewalStatus"></a>

```go
func RenewalStatus() *string
```

- *Type:* *string

---

##### `RenewalStatusReason`<sup>Required</sup> <a name="RenewalStatusReason" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.renewalStatusReason"></a>

```go
func RenewalStatusReason() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() AcmCertificateRenewalSummary
```

- *Type:* <a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateRenewalSummary">AcmCertificateRenewalSummary</a>

---


### AcmCertificateValidationOptionList <a name="AcmCertificateValidationOptionList" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/acmcertificate"

acmcertificate.NewAcmCertificateValidationOptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AcmCertificateValidationOptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.get"></a>

```go
func Get(index *f64) AcmCertificateValidationOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmCertificateValidationOptionOutputReference <a name="AcmCertificateValidationOptionOutputReference" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/acmcertificate"

acmcertificate.NewAcmCertificateValidationOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AcmCertificateValidationOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.validationDomainInput">ValidationDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.validationDomain">ValidationDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `ValidationDomainInput`<sup>Optional</sup> <a name="ValidationDomainInput" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.validationDomainInput"></a>

```go
func ValidationDomainInput() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `ValidationDomain`<sup>Required</sup> <a name="ValidationDomain" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.validationDomain"></a>

```go
func ValidationDomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.acmCertificate.AcmCertificateValidationOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



