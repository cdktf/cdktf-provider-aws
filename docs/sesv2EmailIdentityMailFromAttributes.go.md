# `sesv2EmailIdentityMailFromAttributes` Submodule <a name="`sesv2EmailIdentityMailFromAttributes` Submodule" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2EmailIdentityMailFromAttributes <a name="Sesv2EmailIdentityMailFromAttributes" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes aws_sesv2_email_identity_mail_from_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentitymailfromattributes"

sesv2emailidentitymailfromattributes.NewSesv2EmailIdentityMailFromAttributes(scope Construct, id *string, config Sesv2EmailIdentityMailFromAttributesConfig) Sesv2EmailIdentityMailFromAttributes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig">Sesv2EmailIdentityMailFromAttributesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig">Sesv2EmailIdentityMailFromAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.resetBehaviorOnMxFailure">ResetBehaviorOnMxFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.resetMailFromDomain">ResetMailFromDomain</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBehaviorOnMxFailure` <a name="ResetBehaviorOnMxFailure" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.resetBehaviorOnMxFailure"></a>

```go
func ResetBehaviorOnMxFailure()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.resetId"></a>

```go
func ResetId()
```

##### `ResetMailFromDomain` <a name="ResetMailFromDomain" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.resetMailFromDomain"></a>

```go
func ResetMailFromDomain()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentitymailfromattributes"

sesv2emailidentitymailfromattributes.Sesv2EmailIdentityMailFromAttributes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentitymailfromattributes"

sesv2emailidentitymailfromattributes.Sesv2EmailIdentityMailFromAttributes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentitymailfromattributes"

sesv2emailidentitymailfromattributes.Sesv2EmailIdentityMailFromAttributes_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.behaviorOnMxFailureInput">BehaviorOnMxFailureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.emailIdentityInput">EmailIdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.mailFromDomainInput">MailFromDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.behaviorOnMxFailure">BehaviorOnMxFailure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.emailIdentity">EmailIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.mailFromDomain">MailFromDomain</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BehaviorOnMxFailureInput`<sup>Optional</sup> <a name="BehaviorOnMxFailureInput" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.behaviorOnMxFailureInput"></a>

```go
func BehaviorOnMxFailureInput() *string
```

- *Type:* *string

---

##### `EmailIdentityInput`<sup>Optional</sup> <a name="EmailIdentityInput" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.emailIdentityInput"></a>

```go
func EmailIdentityInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MailFromDomainInput`<sup>Optional</sup> <a name="MailFromDomainInput" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.mailFromDomainInput"></a>

```go
func MailFromDomainInput() *string
```

- *Type:* *string

---

##### `BehaviorOnMxFailure`<sup>Required</sup> <a name="BehaviorOnMxFailure" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.behaviorOnMxFailure"></a>

```go
func BehaviorOnMxFailure() *string
```

- *Type:* *string

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.emailIdentity"></a>

```go
func EmailIdentity() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MailFromDomain`<sup>Required</sup> <a name="MailFromDomain" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.mailFromDomain"></a>

```go
func MailFromDomain() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2EmailIdentityMailFromAttributesConfig <a name="Sesv2EmailIdentityMailFromAttributesConfig" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentitymailfromattributes"

&sesv2emailidentitymailfromattributes.Sesv2EmailIdentityMailFromAttributesConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EmailIdentity: *string,
	BehaviorOnMxFailure: *string,
	Id: *string,
	MailFromDomain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.emailIdentity">EmailIdentity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#email_identity Sesv2EmailIdentityMailFromAttributes#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.behaviorOnMxFailure">BehaviorOnMxFailure</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#behavior_on_mx_failure Sesv2EmailIdentityMailFromAttributes#behavior_on_mx_failure}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#id Sesv2EmailIdentityMailFromAttributes#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.mailFromDomain">MailFromDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#mail_from_domain Sesv2EmailIdentityMailFromAttributes#mail_from_domain}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.emailIdentity"></a>

```go
EmailIdentity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#email_identity Sesv2EmailIdentityMailFromAttributes#email_identity}.

---

##### `BehaviorOnMxFailure`<sup>Optional</sup> <a name="BehaviorOnMxFailure" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.behaviorOnMxFailure"></a>

```go
BehaviorOnMxFailure *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#behavior_on_mx_failure Sesv2EmailIdentityMailFromAttributes#behavior_on_mx_failure}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#id Sesv2EmailIdentityMailFromAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MailFromDomain`<sup>Optional</sup> <a name="MailFromDomain" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.mailFromDomain"></a>

```go
MailFromDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#mail_from_domain Sesv2EmailIdentityMailFromAttributes#mail_from_domain}.

---



