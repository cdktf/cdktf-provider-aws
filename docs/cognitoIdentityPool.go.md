# `cognitoIdentityPool` Submodule <a name="`cognitoIdentityPool` Submodule" id="@cdktf/provider-aws.cognitoIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoIdentityPool <a name="CognitoIdentityPool" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool aws_cognito_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitoidentitypool"

cognitoidentitypool.NewCognitoIdentityPool(scope Construct, id *string, config CognitoIdentityPoolConfig) CognitoIdentityPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig">CognitoIdentityPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig">CognitoIdentityPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders">PutCognitoIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetAllowClassicFlow">ResetAllowClassicFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetAllowUnauthenticatedIdentities">ResetAllowUnauthenticatedIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetCognitoIdentityProviders">ResetCognitoIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetDeveloperProviderName">ResetDeveloperProviderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetOpenidConnectProviderArns">ResetOpenidConnectProviderArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetSamlProviderArns">ResetSamlProviderArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetSupportedLoginProviders">ResetSupportedLoginProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCognitoIdentityProviders` <a name="PutCognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders"></a>

```go
func PutCognitoIdentityProviders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.putCognitoIdentityProviders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowClassicFlow` <a name="ResetAllowClassicFlow" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetAllowClassicFlow"></a>

```go
func ResetAllowClassicFlow()
```

##### `ResetAllowUnauthenticatedIdentities` <a name="ResetAllowUnauthenticatedIdentities" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetAllowUnauthenticatedIdentities"></a>

```go
func ResetAllowUnauthenticatedIdentities()
```

##### `ResetCognitoIdentityProviders` <a name="ResetCognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetCognitoIdentityProviders"></a>

```go
func ResetCognitoIdentityProviders()
```

##### `ResetDeveloperProviderName` <a name="ResetDeveloperProviderName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetDeveloperProviderName"></a>

```go
func ResetDeveloperProviderName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetId"></a>

```go
func ResetId()
```

##### `ResetOpenidConnectProviderArns` <a name="ResetOpenidConnectProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetOpenidConnectProviderArns"></a>

```go
func ResetOpenidConnectProviderArns()
```

##### `ResetSamlProviderArns` <a name="ResetSamlProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetSamlProviderArns"></a>

```go
func ResetSamlProviderArns()
```

##### `ResetSupportedLoginProviders` <a name="ResetSupportedLoginProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetSupportedLoginProviders"></a>

```go
func ResetSupportedLoginProviders()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitoidentitypool"

cognitoidentitypool.CognitoIdentityPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitoidentitypool"

cognitoidentitypool.CognitoIdentityPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitoidentitypool"

cognitoidentitypool.CognitoIdentityPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProviders">CognitoIdentityProviders</a></code> | <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList">CognitoIdentityPoolCognitoIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlowInput">AllowClassicFlowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentitiesInput">AllowUnauthenticatedIdentitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProvidersInput">CognitoIdentityProvidersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderNameInput">DeveloperProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolNameInput">IdentityPoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.openidConnectProviderArnsInput">OpenidConnectProviderArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArnsInput">SamlProviderArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProvidersInput">SupportedLoginProvidersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlow">AllowClassicFlow</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentities">AllowUnauthenticatedIdentities</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderName">DeveloperProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolName">IdentityPoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.openidConnectProviderArns">OpenidConnectProviderArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArns">SamlProviderArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProviders">SupportedLoginProviders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CognitoIdentityProviders`<sup>Required</sup> <a name="CognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProviders"></a>

```go
func CognitoIdentityProviders() CognitoIdentityPoolCognitoIdentityProvidersList
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList">CognitoIdentityPoolCognitoIdentityProvidersList</a>

---

##### `AllowClassicFlowInput`<sup>Optional</sup> <a name="AllowClassicFlowInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlowInput"></a>

```go
func AllowClassicFlowInput() interface{}
```

- *Type:* interface{}

---

##### `AllowUnauthenticatedIdentitiesInput`<sup>Optional</sup> <a name="AllowUnauthenticatedIdentitiesInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentitiesInput"></a>

```go
func AllowUnauthenticatedIdentitiesInput() interface{}
```

- *Type:* interface{}

---

##### `CognitoIdentityProvidersInput`<sup>Optional</sup> <a name="CognitoIdentityProvidersInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.cognitoIdentityProvidersInput"></a>

```go
func CognitoIdentityProvidersInput() interface{}
```

- *Type:* interface{}

---

##### `DeveloperProviderNameInput`<sup>Optional</sup> <a name="DeveloperProviderNameInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderNameInput"></a>

```go
func DeveloperProviderNameInput() *string
```

- *Type:* *string

---

##### `IdentityPoolNameInput`<sup>Optional</sup> <a name="IdentityPoolNameInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolNameInput"></a>

```go
func IdentityPoolNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OpenidConnectProviderArnsInput`<sup>Optional</sup> <a name="OpenidConnectProviderArnsInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.openidConnectProviderArnsInput"></a>

```go
func OpenidConnectProviderArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SamlProviderArnsInput`<sup>Optional</sup> <a name="SamlProviderArnsInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArnsInput"></a>

```go
func SamlProviderArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedLoginProvidersInput`<sup>Optional</sup> <a name="SupportedLoginProvidersInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProvidersInput"></a>

```go
func SupportedLoginProvidersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AllowClassicFlow`<sup>Required</sup> <a name="AllowClassicFlow" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowClassicFlow"></a>

```go
func AllowClassicFlow() interface{}
```

- *Type:* interface{}

---

##### `AllowUnauthenticatedIdentities`<sup>Required</sup> <a name="AllowUnauthenticatedIdentities" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.allowUnauthenticatedIdentities"></a>

```go
func AllowUnauthenticatedIdentities() interface{}
```

- *Type:* interface{}

---

##### `DeveloperProviderName`<sup>Required</sup> <a name="DeveloperProviderName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.developerProviderName"></a>

```go
func DeveloperProviderName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityPoolName`<sup>Required</sup> <a name="IdentityPoolName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.identityPoolName"></a>

```go
func IdentityPoolName() *string
```

- *Type:* *string

---

##### `OpenidConnectProviderArns`<sup>Required</sup> <a name="OpenidConnectProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.openidConnectProviderArns"></a>

```go
func OpenidConnectProviderArns() *[]*string
```

- *Type:* *[]*string

---

##### `SamlProviderArns`<sup>Required</sup> <a name="SamlProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.samlProviderArns"></a>

```go
func SamlProviderArns() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedLoginProviders`<sup>Required</sup> <a name="SupportedLoginProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.supportedLoginProviders"></a>

```go
func SupportedLoginProviders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityPoolCognitoIdentityProviders <a name="CognitoIdentityPoolCognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitoidentitypool"

&cognitoidentitypool.CognitoIdentityPoolCognitoIdentityProviders {
	ClientId: *string,
	ProviderName: *string,
	ServerSideTokenCheck: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#client_id CognitoIdentityPool#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.providerName">ProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.serverSideTokenCheck">ServerSideTokenCheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#client_id CognitoIdentityPool#client_id}.

---

##### `ProviderName`<sup>Optional</sup> <a name="ProviderName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#provider_name CognitoIdentityPool#provider_name}.

---

##### `ServerSideTokenCheck`<sup>Optional</sup> <a name="ServerSideTokenCheck" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProviders.property.serverSideTokenCheck"></a>

```go
ServerSideTokenCheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#server_side_token_check CognitoIdentityPool#server_side_token_check}.

---

### CognitoIdentityPoolConfig <a name="CognitoIdentityPoolConfig" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitoidentitypool"

&cognitoidentitypool.CognitoIdentityPoolConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdentityPoolName: *string,
	AllowClassicFlow: interface{},
	AllowUnauthenticatedIdentities: interface{},
	CognitoIdentityProviders: interface{},
	DeveloperProviderName: *string,
	Id: *string,
	OpenidConnectProviderArns: *[]*string,
	SamlProviderArns: *[]*string,
	SupportedLoginProviders: *map[string]*string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolName">IdentityPoolName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowClassicFlow">AllowClassicFlow</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowUnauthenticatedIdentities">AllowUnauthenticatedIdentities</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoIdentityProviders">CognitoIdentityProviders</a></code> | <code>interface{}</code> | cognito_identity_providers block. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.developerProviderName">DeveloperProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#id CognitoIdentityPool#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.openidConnectProviderArns">OpenidConnectProviderArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.samlProviderArns">SamlProviderArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#saml_provider_arns CognitoIdentityPool#saml_provider_arns}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.supportedLoginProviders">SupportedLoginProviders</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags CognitoIdentityPool#tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags_all CognitoIdentityPool#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdentityPoolName`<sup>Required</sup> <a name="IdentityPoolName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.identityPoolName"></a>

```go
IdentityPoolName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#identity_pool_name CognitoIdentityPool#identity_pool_name}.

---

##### `AllowClassicFlow`<sup>Optional</sup> <a name="AllowClassicFlow" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowClassicFlow"></a>

```go
AllowClassicFlow interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_classic_flow CognitoIdentityPool#allow_classic_flow}.

---

##### `AllowUnauthenticatedIdentities`<sup>Optional</sup> <a name="AllowUnauthenticatedIdentities" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.allowUnauthenticatedIdentities"></a>

```go
AllowUnauthenticatedIdentities interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}.

---

##### `CognitoIdentityProviders`<sup>Optional</sup> <a name="CognitoIdentityProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.cognitoIdentityProviders"></a>

```go
CognitoIdentityProviders interface{}
```

- *Type:* interface{}

cognito_identity_providers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}

---

##### `DeveloperProviderName`<sup>Optional</sup> <a name="DeveloperProviderName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.developerProviderName"></a>

```go
DeveloperProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#developer_provider_name CognitoIdentityPool#developer_provider_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#id CognitoIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OpenidConnectProviderArns`<sup>Optional</sup> <a name="OpenidConnectProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.openidConnectProviderArns"></a>

```go
OpenidConnectProviderArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}.

---

##### `SamlProviderArns`<sup>Optional</sup> <a name="SamlProviderArns" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.samlProviderArns"></a>

```go
SamlProviderArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#saml_provider_arns CognitoIdentityPool#saml_provider_arns}.

---

##### `SupportedLoginProviders`<sup>Optional</sup> <a name="SupportedLoginProviders" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.supportedLoginProviders"></a>

```go
SupportedLoginProviders *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#supported_login_providers CognitoIdentityPool#supported_login_providers}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags CognitoIdentityPool#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool#tags_all CognitoIdentityPool#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoIdentityPoolCognitoIdentityProvidersList <a name="CognitoIdentityPoolCognitoIdentityProvidersList" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitoidentitypool"

cognitoidentitypool.NewCognitoIdentityPoolCognitoIdentityProvidersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CognitoIdentityPoolCognitoIdentityProvidersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get"></a>

```go
func Get(index *f64) CognitoIdentityPoolCognitoIdentityProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoIdentityPoolCognitoIdentityProvidersOutputReference <a name="CognitoIdentityPoolCognitoIdentityProvidersOutputReference" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitoidentitypool"

cognitoidentitypool.NewCognitoIdentityPoolCognitoIdentityProvidersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CognitoIdentityPoolCognitoIdentityProvidersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetProviderName">ResetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetServerSideTokenCheck">ResetServerSideTokenCheck</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetProviderName` <a name="ResetProviderName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetProviderName"></a>

```go
func ResetProviderName()
```

##### `ResetServerSideTokenCheck` <a name="ResetServerSideTokenCheck" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.resetServerSideTokenCheck"></a>

```go
func ResetServerSideTokenCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheckInput">ServerSideTokenCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck">ServerSideTokenCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `ServerSideTokenCheckInput`<sup>Optional</sup> <a name="ServerSideTokenCheckInput" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheckInput"></a>

```go
func ServerSideTokenCheckInput() interface{}
```

- *Type:* interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `ServerSideTokenCheck`<sup>Required</sup> <a name="ServerSideTokenCheck" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck"></a>

```go
func ServerSideTokenCheck() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoIdentityPool.CognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



