# `sesv2EmailIdentity` Submodule <a name="`sesv2EmailIdentity` Submodule" id="@cdktf/provider-aws.sesv2EmailIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2EmailIdentity <a name="Sesv2EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity aws_sesv2_email_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentity"

sesv2emailidentity.NewSesv2EmailIdentity(scope Construct, id *string, config Sesv2EmailIdentityConfig) Sesv2EmailIdentity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig">Sesv2EmailIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig">Sesv2EmailIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes">PutDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetConfigurationSetName">ResetConfigurationSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetDkimSigningAttributes">ResetDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDkimSigningAttributes` <a name="PutDkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes"></a>

```go
func PutDkimSigningAttributes(value Sesv2EmailIdentityDkimSigningAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

---

##### `ResetConfigurationSetName` <a name="ResetConfigurationSetName" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetConfigurationSetName"></a>

```go
func ResetConfigurationSetName()
```

##### `ResetDkimSigningAttributes` <a name="ResetDkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetDkimSigningAttributes"></a>

```go
func ResetDkimSigningAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentity"

sesv2emailidentity.Sesv2EmailIdentity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentity"

sesv2emailidentity.Sesv2EmailIdentity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentity"

sesv2emailidentity.Sesv2EmailIdentity_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributes">DkimSigningAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference">Sesv2EmailIdentityDkimSigningAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.identityType">IdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.verifiedForSendingStatus">VerifiedForSendingStatus</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetNameInput">ConfigurationSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributesInput">DkimSigningAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentityInput">EmailIdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetName">ConfigurationSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentity">EmailIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DkimSigningAttributes`<sup>Required</sup> <a name="DkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributes"></a>

```go
func DkimSigningAttributes() Sesv2EmailIdentityDkimSigningAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference">Sesv2EmailIdentityDkimSigningAttributesOutputReference</a>

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.identityType"></a>

```go
func IdentityType() *string
```

- *Type:* *string

---

##### `VerifiedForSendingStatus`<sup>Required</sup> <a name="VerifiedForSendingStatus" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.verifiedForSendingStatus"></a>

```go
func VerifiedForSendingStatus() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ConfigurationSetNameInput`<sup>Optional</sup> <a name="ConfigurationSetNameInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetNameInput"></a>

```go
func ConfigurationSetNameInput() *string
```

- *Type:* *string

---

##### `DkimSigningAttributesInput`<sup>Optional</sup> <a name="DkimSigningAttributesInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributesInput"></a>

```go
func DkimSigningAttributesInput() Sesv2EmailIdentityDkimSigningAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

---

##### `EmailIdentityInput`<sup>Optional</sup> <a name="EmailIdentityInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentityInput"></a>

```go
func EmailIdentityInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetName"></a>

```go
func ConfigurationSetName() *string
```

- *Type:* *string

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentity"></a>

```go
func EmailIdentity() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2EmailIdentityConfig <a name="Sesv2EmailIdentityConfig" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentity"

&sesv2emailidentity.Sesv2EmailIdentityConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EmailIdentity: *string,
	ConfigurationSetName: *string,
	DkimSigningAttributes: github.com/cdktf/cdktf-provider-aws-go/aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.emailIdentity">EmailIdentity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#email_identity Sesv2EmailIdentity#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.configurationSetName">ConfigurationSetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#configuration_set_name Sesv2EmailIdentity#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dkimSigningAttributes">DkimSigningAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | dkim_signing_attributes block. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#id Sesv2EmailIdentity#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags Sesv2EmailIdentity#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags_all Sesv2EmailIdentity#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.emailIdentity"></a>

```go
EmailIdentity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#email_identity Sesv2EmailIdentity#email_identity}.

---

##### `ConfigurationSetName`<sup>Optional</sup> <a name="ConfigurationSetName" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.configurationSetName"></a>

```go
ConfigurationSetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#configuration_set_name Sesv2EmailIdentity#configuration_set_name}.

---

##### `DkimSigningAttributes`<sup>Optional</sup> <a name="DkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dkimSigningAttributes"></a>

```go
DkimSigningAttributes Sesv2EmailIdentityDkimSigningAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

dkim_signing_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#dkim_signing_attributes Sesv2EmailIdentity#dkim_signing_attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#id Sesv2EmailIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags Sesv2EmailIdentity#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags_all Sesv2EmailIdentity#tags_all}.

---

### Sesv2EmailIdentityDkimSigningAttributes <a name="Sesv2EmailIdentityDkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentity"

&sesv2emailidentity.Sesv2EmailIdentityDkimSigningAttributes {
	DomainSigningPrivateKey: *string,
	DomainSigningSelector: *string,
	NextSigningKeyLength: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey">DomainSigningPrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_private_key Sesv2EmailIdentity#domain_signing_private_key}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningSelector">DomainSigningSelector</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_selector Sesv2EmailIdentity#domain_signing_selector}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.nextSigningKeyLength">NextSigningKeyLength</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#next_signing_key_length Sesv2EmailIdentity#next_signing_key_length}. |

---

##### `DomainSigningPrivateKey`<sup>Optional</sup> <a name="DomainSigningPrivateKey" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey"></a>

```go
DomainSigningPrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_private_key Sesv2EmailIdentity#domain_signing_private_key}.

---

##### `DomainSigningSelector`<sup>Optional</sup> <a name="DomainSigningSelector" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningSelector"></a>

```go
DomainSigningSelector *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_selector Sesv2EmailIdentity#domain_signing_selector}.

---

##### `NextSigningKeyLength`<sup>Optional</sup> <a name="NextSigningKeyLength" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.nextSigningKeyLength"></a>

```go
NextSigningKeyLength *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#next_signing_key_length Sesv2EmailIdentity#next_signing_key_length}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2EmailIdentityDkimSigningAttributesOutputReference <a name="Sesv2EmailIdentityDkimSigningAttributesOutputReference" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sesv2emailidentity"

sesv2emailidentity.NewSesv2EmailIdentityDkimSigningAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Sesv2EmailIdentityDkimSigningAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey">ResetDomainSigningPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector">ResetDomainSigningSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength">ResetNextSigningKeyLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainSigningPrivateKey` <a name="ResetDomainSigningPrivateKey" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey"></a>

```go
func ResetDomainSigningPrivateKey()
```

##### `ResetDomainSigningSelector` <a name="ResetDomainSigningSelector" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector"></a>

```go
func ResetDomainSigningSelector()
```

##### `ResetNextSigningKeyLength` <a name="ResetNextSigningKeyLength" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength"></a>

```go
func ResetNextSigningKeyLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength">CurrentSigningKeyLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp">LastKeyGenerationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin">SigningAttributesOrigin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens">Tokens</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput">DomainSigningPrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput">DomainSigningSelectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput">NextSigningKeyLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey">DomainSigningPrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector">DomainSigningSelector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength">NextSigningKeyLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentSigningKeyLength`<sup>Required</sup> <a name="CurrentSigningKeyLength" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength"></a>

```go
func CurrentSigningKeyLength() *string
```

- *Type:* *string

---

##### `LastKeyGenerationTimestamp`<sup>Required</sup> <a name="LastKeyGenerationTimestamp" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp"></a>

```go
func LastKeyGenerationTimestamp() *string
```

- *Type:* *string

---

##### `SigningAttributesOrigin`<sup>Required</sup> <a name="SigningAttributesOrigin" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin"></a>

```go
func SigningAttributesOrigin() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens"></a>

```go
func Tokens() *[]*string
```

- *Type:* *[]*string

---

##### `DomainSigningPrivateKeyInput`<sup>Optional</sup> <a name="DomainSigningPrivateKeyInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput"></a>

```go
func DomainSigningPrivateKeyInput() *string
```

- *Type:* *string

---

##### `DomainSigningSelectorInput`<sup>Optional</sup> <a name="DomainSigningSelectorInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput"></a>

```go
func DomainSigningSelectorInput() *string
```

- *Type:* *string

---

##### `NextSigningKeyLengthInput`<sup>Optional</sup> <a name="NextSigningKeyLengthInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput"></a>

```go
func NextSigningKeyLengthInput() *string
```

- *Type:* *string

---

##### `DomainSigningPrivateKey`<sup>Required</sup> <a name="DomainSigningPrivateKey" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey"></a>

```go
func DomainSigningPrivateKey() *string
```

- *Type:* *string

---

##### `DomainSigningSelector`<sup>Required</sup> <a name="DomainSigningSelector" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector"></a>

```go
func DomainSigningSelector() *string
```

- *Type:* *string

---

##### `NextSigningKeyLength`<sup>Required</sup> <a name="NextSigningKeyLength" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength"></a>

```go
func NextSigningKeyLength() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() Sesv2EmailIdentityDkimSigningAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

---



