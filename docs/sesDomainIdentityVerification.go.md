# `sesDomainIdentityVerification` Submodule <a name="`sesDomainIdentityVerification` Submodule" id="@cdktf/provider-aws.sesDomainIdentityVerification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesDomainIdentityVerification <a name="SesDomainIdentityVerification" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification aws_ses_domain_identity_verification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesdomainidentityverification"

sesdomainidentityverification.NewSesDomainIdentityVerification(scope Construct, id *string, config SesDomainIdentityVerificationConfig) SesDomainIdentityVerification
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig">SesDomainIdentityVerificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig">SesDomainIdentityVerificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.putTimeouts"></a>

```go
func PutTimeouts(value SesDomainIdentityVerificationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeouts">SesDomainIdentityVerificationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesdomainidentityverification"

sesdomainidentityverification.SesDomainIdentityVerification_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesdomainidentityverification"

sesdomainidentityverification.SesDomainIdentityVerification_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesdomainidentityverification"

sesdomainidentityverification.SesDomainIdentityVerification_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference">SesDomainIdentityVerificationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.timeouts"></a>

```go
func Timeouts() SesDomainIdentityVerificationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference">SesDomainIdentityVerificationTimeoutsOutputReference</a>

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerification.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SesDomainIdentityVerificationConfig <a name="SesDomainIdentityVerificationConfig" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesdomainidentityverification"

&sesdomainidentityverification.SesDomainIdentityVerificationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Domain: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification#domain SesDomainIdentityVerification#domain}. |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification#id SesDomainIdentityVerification#id}. |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeouts">SesDomainIdentityVerificationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification#domain SesDomainIdentityVerification#domain}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification#id SesDomainIdentityVerification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationConfig.property.timeouts"></a>

```go
Timeouts SesDomainIdentityVerificationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeouts">SesDomainIdentityVerificationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification#timeouts SesDomainIdentityVerification#timeouts}

---

### SesDomainIdentityVerificationTimeouts <a name="SesDomainIdentityVerificationTimeouts" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesdomainidentityverification"

&sesdomainidentityverification.SesDomainIdentityVerificationTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification#create SesDomainIdentityVerification#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification#create SesDomainIdentityVerification#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesDomainIdentityVerificationTimeoutsOutputReference <a name="SesDomainIdentityVerificationTimeoutsOutputReference" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesdomainidentityverification"

sesdomainidentityverification.NewSesDomainIdentityVerificationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesDomainIdentityVerificationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesDomainIdentityVerification.SesDomainIdentityVerificationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



