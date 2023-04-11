# `apprunnerCustomDomainAssociation` Submodule <a name="`apprunnerCustomDomainAssociation` Submodule" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerCustomDomainAssociation <a name="ApprunnerCustomDomainAssociation" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association aws_apprunner_custom_domain_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnercustomdomainassociation"

apprunnercustomdomainassociation.NewApprunnerCustomDomainAssociation(scope Construct, id *string, config ApprunnerCustomDomainAssociationConfig) ApprunnerCustomDomainAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig">ApprunnerCustomDomainAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig">ApprunnerCustomDomainAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetEnableWwwSubdomain">ResetEnableWwwSubdomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEnableWwwSubdomain` <a name="ResetEnableWwwSubdomain" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetEnableWwwSubdomain"></a>

```go
func ResetEnableWwwSubdomain()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnercustomdomainassociation"

apprunnercustomdomainassociation.ApprunnerCustomDomainAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnercustomdomainassociation"

apprunnercustomdomainassociation.ApprunnerCustomDomainAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnercustomdomainassociation"

apprunnercustomdomainassociation.ApprunnerCustomDomainAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.certificateValidationRecords">CertificateValidationRecords</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList">ApprunnerCustomDomainAssociationCertificateValidationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dnsTarget">DnsTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomainInput">EnableWwwSubdomainInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArnInput">ServiceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomain">EnableWwwSubdomain</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArn">ServiceArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateValidationRecords`<sup>Required</sup> <a name="CertificateValidationRecords" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.certificateValidationRecords"></a>

```go
func CertificateValidationRecords() ApprunnerCustomDomainAssociationCertificateValidationRecordsList
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList">ApprunnerCustomDomainAssociationCertificateValidationRecordsList</a>

---

##### `DnsTarget`<sup>Required</sup> <a name="DnsTarget" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dnsTarget"></a>

```go
func DnsTarget() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `EnableWwwSubdomainInput`<sup>Optional</sup> <a name="EnableWwwSubdomainInput" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomainInput"></a>

```go
func EnableWwwSubdomainInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ServiceArnInput`<sup>Optional</sup> <a name="ServiceArnInput" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArnInput"></a>

```go
func ServiceArnInput() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `EnableWwwSubdomain`<sup>Required</sup> <a name="EnableWwwSubdomain" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomain"></a>

```go
func EnableWwwSubdomain() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArn"></a>

```go
func ServiceArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerCustomDomainAssociationCertificateValidationRecords <a name="ApprunnerCustomDomainAssociationCertificateValidationRecords" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnercustomdomainassociation"

&apprunnercustomdomainassociation.ApprunnerCustomDomainAssociationCertificateValidationRecords {

}
```


### ApprunnerCustomDomainAssociationConfig <a name="ApprunnerCustomDomainAssociationConfig" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnercustomdomainassociation"

&apprunnercustomdomainassociation.ApprunnerCustomDomainAssociationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	ServiceArn: *string,
	EnableWwwSubdomain: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#domain_name ApprunnerCustomDomainAssociation#domain_name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.serviceArn">ServiceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#service_arn ApprunnerCustomDomainAssociation#service_arn}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.enableWwwSubdomain">EnableWwwSubdomain</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#id ApprunnerCustomDomainAssociation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#domain_name ApprunnerCustomDomainAssociation#domain_name}.

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.serviceArn"></a>

```go
ServiceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#service_arn ApprunnerCustomDomainAssociation#service_arn}.

---

##### `EnableWwwSubdomain`<sup>Optional</sup> <a name="EnableWwwSubdomain" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.enableWwwSubdomain"></a>

```go
EnableWwwSubdomain interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#id ApprunnerCustomDomainAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerCustomDomainAssociationCertificateValidationRecordsList <a name="ApprunnerCustomDomainAssociationCertificateValidationRecordsList" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnercustomdomainassociation"

apprunnercustomdomainassociation.NewApprunnerCustomDomainAssociationCertificateValidationRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApprunnerCustomDomainAssociationCertificateValidationRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.get"></a>

```go
func Get(index *f64) ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference <a name="ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apprunnercustomdomainassociation"

apprunnercustomdomainassociation.NewApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords">ApprunnerCustomDomainAssociationCertificateValidationRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApprunnerCustomDomainAssociationCertificateValidationRecords
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords">ApprunnerCustomDomainAssociationCertificateValidationRecords</a>

---



