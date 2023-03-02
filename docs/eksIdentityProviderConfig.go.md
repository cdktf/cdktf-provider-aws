# `eksIdentityProviderConfig` Submodule <a name="`eksIdentityProviderConfig` Submodule" id="@cdktf/provider-aws.eksIdentityProviderConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksIdentityProviderConfig <a name="EksIdentityProviderConfig" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config aws_eks_identity_provider_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksidentityproviderconfig"

eksidentityproviderconfig.NewEksIdentityProviderConfig(scope Construct, id *string, config EksIdentityProviderConfigConfig) EksIdentityProviderConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig">EksIdentityProviderConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig">EksIdentityProviderConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc">PutOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutOidc` <a name="PutOidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc"></a>

```go
func PutOidc(value EksIdentityProviderConfigOidc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putTimeouts"></a>

```go
func PutTimeouts(value EksIdentityProviderConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksidentityproviderconfig"

eksidentityproviderconfig.EksIdentityProviderConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksidentityproviderconfig"

eksidentityproviderconfig.EksIdentityProviderConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksidentityproviderconfig"

eksidentityproviderconfig.EksIdentityProviderConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidc">Oidc</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference">EksIdentityProviderConfigOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference">EksIdentityProviderConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidcInput">OidcInput</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Oidc`<sup>Required</sup> <a name="Oidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidc"></a>

```go
func Oidc() EksIdentityProviderConfigOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference">EksIdentityProviderConfigOidcOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeouts"></a>

```go
func Timeouts() EksIdentityProviderConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference">EksIdentityProviderConfigTimeoutsOutputReference</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OidcInput`<sup>Optional</sup> <a name="OidcInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidcInput"></a>

```go
func OidcInput() EksIdentityProviderConfigOidc
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EksIdentityProviderConfigConfig <a name="EksIdentityProviderConfigConfig" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksidentityproviderconfig"

&eksidentityproviderconfig.EksIdentityProviderConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterName: *string,
	Oidc: github.com/cdktf/cdktf-provider-aws-go/aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#cluster_name EksIdentityProviderConfig#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.oidc">Oidc</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#id EksIdentityProviderConfig#id}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags EksIdentityProviderConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags_all EksIdentityProviderConfig#tags_all}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#cluster_name EksIdentityProviderConfig#cluster_name}.

---

##### `Oidc`<sup>Required</sup> <a name="Oidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.oidc"></a>

```go
Oidc EksIdentityProviderConfigOidc
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#oidc EksIdentityProviderConfig#oidc}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#id EksIdentityProviderConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags EksIdentityProviderConfig#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags_all EksIdentityProviderConfig#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.timeouts"></a>

```go
Timeouts EksIdentityProviderConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#timeouts EksIdentityProviderConfig#timeouts}

---

### EksIdentityProviderConfigOidc <a name="EksIdentityProviderConfigOidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksidentityproviderconfig"

&eksidentityproviderconfig.EksIdentityProviderConfigOidc {
	ClientId: *string,
	IdentityProviderConfigName: *string,
	IssuerUrl: *string,
	GroupsClaim: *string,
	GroupsPrefix: *string,
	RequiredClaims: *map[string]*string,
	UsernameClaim: *string,
	UsernamePrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#client_id EksIdentityProviderConfig#client_id}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.identityProviderConfigName">IdentityProviderConfigName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.issuerUrl">IssuerUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#issuer_url EksIdentityProviderConfig#issuer_url}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsClaim">GroupsClaim</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_claim EksIdentityProviderConfig#groups_claim}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsPrefix">GroupsPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_prefix EksIdentityProviderConfig#groups_prefix}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.requiredClaims">RequiredClaims</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#required_claims EksIdentityProviderConfig#required_claims}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernameClaim">UsernameClaim</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_claim EksIdentityProviderConfig#username_claim}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernamePrefix">UsernamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_prefix EksIdentityProviderConfig#username_prefix}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#client_id EksIdentityProviderConfig#client_id}.

---

##### `IdentityProviderConfigName`<sup>Required</sup> <a name="IdentityProviderConfigName" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.identityProviderConfigName"></a>

```go
IdentityProviderConfigName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}.

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.issuerUrl"></a>

```go
IssuerUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#issuer_url EksIdentityProviderConfig#issuer_url}.

---

##### `GroupsClaim`<sup>Optional</sup> <a name="GroupsClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsClaim"></a>

```go
GroupsClaim *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_claim EksIdentityProviderConfig#groups_claim}.

---

##### `GroupsPrefix`<sup>Optional</sup> <a name="GroupsPrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsPrefix"></a>

```go
GroupsPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_prefix EksIdentityProviderConfig#groups_prefix}.

---

##### `RequiredClaims`<sup>Optional</sup> <a name="RequiredClaims" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.requiredClaims"></a>

```go
RequiredClaims *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#required_claims EksIdentityProviderConfig#required_claims}.

---

##### `UsernameClaim`<sup>Optional</sup> <a name="UsernameClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernameClaim"></a>

```go
UsernameClaim *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_claim EksIdentityProviderConfig#username_claim}.

---

##### `UsernamePrefix`<sup>Optional</sup> <a name="UsernamePrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernamePrefix"></a>

```go
UsernamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_prefix EksIdentityProviderConfig#username_prefix}.

---

### EksIdentityProviderConfigTimeouts <a name="EksIdentityProviderConfigTimeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksidentityproviderconfig"

&eksidentityproviderconfig.EksIdentityProviderConfigTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#create EksIdentityProviderConfig#create}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#delete EksIdentityProviderConfig#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#create EksIdentityProviderConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#delete EksIdentityProviderConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EksIdentityProviderConfigOidcOutputReference <a name="EksIdentityProviderConfigOidcOutputReference" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksidentityproviderconfig"

eksidentityproviderconfig.NewEksIdentityProviderConfigOidcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EksIdentityProviderConfigOidcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsClaim">ResetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsPrefix">ResetGroupsPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetRequiredClaims">ResetRequiredClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernameClaim">ResetUsernameClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernamePrefix">ResetUsernamePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupsClaim` <a name="ResetGroupsClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsClaim"></a>

```go
func ResetGroupsClaim()
```

##### `ResetGroupsPrefix` <a name="ResetGroupsPrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsPrefix"></a>

```go
func ResetGroupsPrefix()
```

##### `ResetRequiredClaims` <a name="ResetRequiredClaims" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetRequiredClaims"></a>

```go
func ResetRequiredClaims()
```

##### `ResetUsernameClaim` <a name="ResetUsernameClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernameClaim"></a>

```go
func ResetUsernameClaim()
```

##### `ResetUsernamePrefix` <a name="ResetUsernamePrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernamePrefix"></a>

```go
func ResetUsernamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaimInput">GroupsClaimInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefixInput">GroupsPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigNameInput">IdentityProviderConfigNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrlInput">IssuerUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaimsInput">RequiredClaimsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaimInput">UsernameClaimInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefixInput">UsernamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaim">GroupsClaim</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefix">GroupsPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigName">IdentityProviderConfigName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrl">IssuerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaims">RequiredClaims</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaim">UsernameClaim</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefix">UsernamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `GroupsClaimInput`<sup>Optional</sup> <a name="GroupsClaimInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaimInput"></a>

```go
func GroupsClaimInput() *string
```

- *Type:* *string

---

##### `GroupsPrefixInput`<sup>Optional</sup> <a name="GroupsPrefixInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefixInput"></a>

```go
func GroupsPrefixInput() *string
```

- *Type:* *string

---

##### `IdentityProviderConfigNameInput`<sup>Optional</sup> <a name="IdentityProviderConfigNameInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigNameInput"></a>

```go
func IdentityProviderConfigNameInput() *string
```

- *Type:* *string

---

##### `IssuerUrlInput`<sup>Optional</sup> <a name="IssuerUrlInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrlInput"></a>

```go
func IssuerUrlInput() *string
```

- *Type:* *string

---

##### `RequiredClaimsInput`<sup>Optional</sup> <a name="RequiredClaimsInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaimsInput"></a>

```go
func RequiredClaimsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UsernameClaimInput`<sup>Optional</sup> <a name="UsernameClaimInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaimInput"></a>

```go
func UsernameClaimInput() *string
```

- *Type:* *string

---

##### `UsernamePrefixInput`<sup>Optional</sup> <a name="UsernamePrefixInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefixInput"></a>

```go
func UsernamePrefixInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `GroupsClaim`<sup>Required</sup> <a name="GroupsClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaim"></a>

```go
func GroupsClaim() *string
```

- *Type:* *string

---

##### `GroupsPrefix`<sup>Required</sup> <a name="GroupsPrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefix"></a>

```go
func GroupsPrefix() *string
```

- *Type:* *string

---

##### `IdentityProviderConfigName`<sup>Required</sup> <a name="IdentityProviderConfigName" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigName"></a>

```go
func IdentityProviderConfigName() *string
```

- *Type:* *string

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrl"></a>

```go
func IssuerUrl() *string
```

- *Type:* *string

---

##### `RequiredClaims`<sup>Required</sup> <a name="RequiredClaims" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaims"></a>

```go
func RequiredClaims() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UsernameClaim`<sup>Required</sup> <a name="UsernameClaim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaim"></a>

```go
func UsernameClaim() *string
```

- *Type:* *string

---

##### `UsernamePrefix`<sup>Required</sup> <a name="UsernamePrefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefix"></a>

```go
func UsernamePrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.internalValue"></a>

```go
func InternalValue() EksIdentityProviderConfigOidc
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

---


### EksIdentityProviderConfigTimeoutsOutputReference <a name="EksIdentityProviderConfigTimeoutsOutputReference" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/eksidentityproviderconfig"

eksidentityproviderconfig.NewEksIdentityProviderConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EksIdentityProviderConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



