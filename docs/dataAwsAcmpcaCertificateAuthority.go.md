# `dataAwsAcmpcaCertificateAuthority` Submodule <a name="`dataAwsAcmpcaCertificateAuthority` Submodule" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAcmpcaCertificateAuthority <a name="DataAwsAcmpcaCertificateAuthority" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority aws_acmpca_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsacmpcacertificateauthority"

dataawsacmpcacertificateauthority.NewDataAwsAcmpcaCertificateAuthority(scope Construct, id *string, config DataAwsAcmpcaCertificateAuthorityConfig) DataAwsAcmpcaCertificateAuthority
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig">DataAwsAcmpcaCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig">DataAwsAcmpcaCertificateAuthorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsacmpcacertificateauthority"

dataawsacmpcacertificateauthority.DataAwsAcmpcaCertificateAuthority_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsacmpcacertificateauthority"

dataawsacmpcacertificateauthority.DataAwsAcmpcaCertificateAuthority_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsacmpcacertificateauthority"

dataawsacmpcacertificateauthority.DataAwsAcmpcaCertificateAuthority_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificateChain">CertificateChain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificateSigningRequest">CertificateSigningRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.notAfter">NotAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.notBefore">NotBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.revocationConfiguration">RevocationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.serial">Serial</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.usageMode">UsageMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificateChain"></a>

```go
func CertificateChain() *string
```

- *Type:* *string

---

##### `CertificateSigningRequest`<sup>Required</sup> <a name="CertificateSigningRequest" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.certificateSigningRequest"></a>

```go
func CertificateSigningRequest() *string
```

- *Type:* *string

---

##### `NotAfter`<sup>Required</sup> <a name="NotAfter" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.notAfter"></a>

```go
func NotAfter() *string
```

- *Type:* *string

---

##### `NotBefore`<sup>Required</sup> <a name="NotBefore" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.notBefore"></a>

```go
func NotBefore() *string
```

- *Type:* *string

---

##### `RevocationConfiguration`<sup>Required</sup> <a name="RevocationConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.revocationConfiguration"></a>

```go
func RevocationConfiguration() DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList</a>

---

##### `Serial`<sup>Required</sup> <a name="Serial" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.serial"></a>

```go
func Serial() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UsageMode`<sup>Required</sup> <a name="UsageMode" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.usageMode"></a>

```go
func UsageMode() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthority.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAcmpcaCertificateAuthorityConfig <a name="DataAwsAcmpcaCertificateAuthorityConfig" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsacmpcacertificateauthority"

&dataawsacmpcacertificateauthority.DataAwsAcmpcaCertificateAuthorityConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Arn: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#arn DataAwsAcmpcaCertificateAuthority#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#id DataAwsAcmpcaCertificateAuthority#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#tags DataAwsAcmpcaCertificateAuthority#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#arn DataAwsAcmpcaCertificateAuthority#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#id DataAwsAcmpcaCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/acmpca_certificate_authority#tags DataAwsAcmpcaCertificateAuthority#tags}.

---

### DataAwsAcmpcaCertificateAuthorityRevocationConfiguration <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsacmpcacertificateauthority"

&dataawsacmpcacertificateauthority.DataAwsAcmpcaCertificateAuthorityRevocationConfiguration {

}
```


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsacmpcacertificateauthority"

&dataawsacmpcacertificateauthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {

}
```


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsacmpcacertificateauthority"

&dataawsacmpcacertificateauthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsacmpcacertificateauthority"

dataawsacmpcacertificateauthority.NewDataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsacmpcacertificateauthority"

dataawsacmpcacertificateauthority.NewDataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname">CustomCname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays">ExpirationInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl">S3ObjectAcl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomCname`<sup>Required</sup> <a name="CustomCname" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname"></a>

```go
func CustomCname() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ExpirationInDays`<sup>Required</sup> <a name="ExpirationInDays" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays"></a>

```go
func ExpirationInDays() *f64
```

- *Type:* *f64

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `S3ObjectAcl`<sup>Required</sup> <a name="S3ObjectAcl" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl"></a>

```go
func S3ObjectAcl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

---


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsacmpcacertificateauthority"

dataawsacmpcacertificateauthority.NewDataAwsAcmpcaCertificateAuthorityRevocationConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsacmpcacertificateauthority"

dataawsacmpcacertificateauthority.NewDataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsacmpcacertificateauthority"

dataawsacmpcacertificateauthority.NewDataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname">OcspCustomCname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OcspCustomCname`<sup>Required</sup> <a name="OcspCustomCname" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname"></a>

```go
func OcspCustomCname() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

---


### DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference <a name="DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsacmpcacertificateauthority"

dataawsacmpcacertificateauthority.NewDataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration">CrlConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration">OcspConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrlConfiguration`<sup>Required</sup> <a name="CrlConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration"></a>

```go
func CrlConfiguration() DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList</a>

---

##### `OcspConfiguration`<sup>Required</sup> <a name="OcspConfiguration" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration"></a>

```go
func OcspConfiguration() DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList">DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsAcmpcaCertificateAuthorityRevocationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAcmpcaCertificateAuthority.DataAwsAcmpcaCertificateAuthorityRevocationConfiguration">DataAwsAcmpcaCertificateAuthorityRevocationConfiguration</a>

---



