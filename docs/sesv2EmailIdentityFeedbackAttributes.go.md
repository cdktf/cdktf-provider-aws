# `sesv2EmailIdentityFeedbackAttributes` Submodule <a name="`sesv2EmailIdentityFeedbackAttributes` Submodule" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2EmailIdentityFeedbackAttributes <a name="Sesv2EmailIdentityFeedbackAttributes" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes aws_sesv2_email_identity_feedback_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentityfeedbackattributes"

sesv2emailidentityfeedbackattributes.NewSesv2EmailIdentityFeedbackAttributes(scope Construct, id *string, config Sesv2EmailIdentityFeedbackAttributesConfig) Sesv2EmailIdentityFeedbackAttributes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig">Sesv2EmailIdentityFeedbackAttributesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig">Sesv2EmailIdentityFeedbackAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetEmailForwardingEnabled">ResetEmailForwardingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEmailForwardingEnabled` <a name="ResetEmailForwardingEnabled" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetEmailForwardingEnabled"></a>

```go
func ResetEmailForwardingEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentityfeedbackattributes"

sesv2emailidentityfeedbackattributes.Sesv2EmailIdentityFeedbackAttributes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentityfeedbackattributes"

sesv2emailidentityfeedbackattributes.Sesv2EmailIdentityFeedbackAttributes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentityfeedbackattributes"

sesv2emailidentityfeedbackattributes.Sesv2EmailIdentityFeedbackAttributes_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailForwardingEnabledInput">EmailForwardingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailIdentityInput">EmailIdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailForwardingEnabled">EmailForwardingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailIdentity">EmailIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EmailForwardingEnabledInput`<sup>Optional</sup> <a name="EmailForwardingEnabledInput" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailForwardingEnabledInput"></a>

```go
func EmailForwardingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EmailIdentityInput`<sup>Optional</sup> <a name="EmailIdentityInput" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailIdentityInput"></a>

```go
func EmailIdentityInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `EmailForwardingEnabled`<sup>Required</sup> <a name="EmailForwardingEnabled" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailForwardingEnabled"></a>

```go
func EmailForwardingEnabled() interface{}
```

- *Type:* interface{}

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.emailIdentity"></a>

```go
func EmailIdentity() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2EmailIdentityFeedbackAttributesConfig <a name="Sesv2EmailIdentityFeedbackAttributesConfig" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentityfeedbackattributes"

&sesv2emailidentityfeedbackattributes.Sesv2EmailIdentityFeedbackAttributesConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EmailIdentity: *string,
	EmailForwardingEnabled: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.emailIdentity">EmailIdentity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_identity Sesv2EmailIdentityFeedbackAttributes#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.emailForwardingEnabled">EmailForwardingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_forwarding_enabled Sesv2EmailIdentityFeedbackAttributes#email_forwarding_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#id Sesv2EmailIdentityFeedbackAttributes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.emailIdentity"></a>

```go
EmailIdentity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_identity Sesv2EmailIdentityFeedbackAttributes#email_identity}.

---

##### `EmailForwardingEnabled`<sup>Optional</sup> <a name="EmailForwardingEnabled" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.emailForwardingEnabled"></a>

```go
EmailForwardingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#email_forwarding_enabled Sesv2EmailIdentityFeedbackAttributes#email_forwarding_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentityFeedbackAttributes.Sesv2EmailIdentityFeedbackAttributesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_feedback_attributes#id Sesv2EmailIdentityFeedbackAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



