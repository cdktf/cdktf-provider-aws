# `sagemakerWorkforce` Submodule <a name="`sagemakerWorkforce` Submodule" id="@cdktf/provider-aws.sagemakerWorkforce"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerWorkforce <a name="SagemakerWorkforce" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce aws_sagemaker_workforce}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerworkforce"

sagemakerworkforce.NewSagemakerWorkforce(scope Construct, id *string, config SagemakerWorkforceConfig) SagemakerWorkforce
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig">SagemakerWorkforceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig">SagemakerWorkforceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putCognitoConfig">PutCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig">PutOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putSourceIpConfig">PutSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putWorkforceVpcConfig">PutWorkforceVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetCognitoConfig">ResetCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetOidcConfig">ResetOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetSourceIpConfig">ResetSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetWorkforceVpcConfig">ResetWorkforceVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCognitoConfig` <a name="PutCognitoConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putCognitoConfig"></a>

```go
func PutCognitoConfig(value SagemakerWorkforceCognitoConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putCognitoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

---

##### `PutOidcConfig` <a name="PutOidcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig"></a>

```go
func PutOidcConfig(value SagemakerWorkforceOidcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putOidcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

---

##### `PutSourceIpConfig` <a name="PutSourceIpConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putSourceIpConfig"></a>

```go
func PutSourceIpConfig(value SagemakerWorkforceSourceIpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putSourceIpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

---

##### `PutWorkforceVpcConfig` <a name="PutWorkforceVpcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putWorkforceVpcConfig"></a>

```go
func PutWorkforceVpcConfig(value SagemakerWorkforceWorkforceVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.putWorkforceVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

---

##### `ResetCognitoConfig` <a name="ResetCognitoConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetCognitoConfig"></a>

```go
func ResetCognitoConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetId"></a>

```go
func ResetId()
```

##### `ResetOidcConfig` <a name="ResetOidcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetOidcConfig"></a>

```go
func ResetOidcConfig()
```

##### `ResetSourceIpConfig` <a name="ResetSourceIpConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetSourceIpConfig"></a>

```go
func ResetSourceIpConfig()
```

##### `ResetWorkforceVpcConfig` <a name="ResetWorkforceVpcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.resetWorkforceVpcConfig"></a>

```go
func ResetWorkforceVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerworkforce"

sagemakerworkforce.SagemakerWorkforce_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerworkforce"

sagemakerworkforce.SagemakerWorkforce_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerworkforce"

sagemakerworkforce.SagemakerWorkforce_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cognitoConfig">CognitoConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference">SagemakerWorkforceCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.oidcConfig">OidcConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference">SagemakerWorkforceOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.sourceIpConfig">SourceIpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference">SagemakerWorkforceSourceIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.subdomain">Subdomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceVpcConfig">WorkforceVpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference">SagemakerWorkforceWorkforceVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cognitoConfigInput">CognitoConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.oidcConfigInput">OidcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.sourceIpConfigInput">SourceIpConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceNameInput">WorkforceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceVpcConfigInput">WorkforceVpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceName">WorkforceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CognitoConfig`<sup>Required</sup> <a name="CognitoConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cognitoConfig"></a>

```go
func CognitoConfig() SagemakerWorkforceCognitoConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference">SagemakerWorkforceCognitoConfigOutputReference</a>

---

##### `OidcConfig`<sup>Required</sup> <a name="OidcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.oidcConfig"></a>

```go
func OidcConfig() SagemakerWorkforceOidcConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference">SagemakerWorkforceOidcConfigOutputReference</a>

---

##### `SourceIpConfig`<sup>Required</sup> <a name="SourceIpConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.sourceIpConfig"></a>

```go
func SourceIpConfig() SagemakerWorkforceSourceIpConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference">SagemakerWorkforceSourceIpConfigOutputReference</a>

---

##### `Subdomain`<sup>Required</sup> <a name="Subdomain" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.subdomain"></a>

```go
func Subdomain() *string
```

- *Type:* *string

---

##### `WorkforceVpcConfig`<sup>Required</sup> <a name="WorkforceVpcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceVpcConfig"></a>

```go
func WorkforceVpcConfig() SagemakerWorkforceWorkforceVpcConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference">SagemakerWorkforceWorkforceVpcConfigOutputReference</a>

---

##### `CognitoConfigInput`<sup>Optional</sup> <a name="CognitoConfigInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.cognitoConfigInput"></a>

```go
func CognitoConfigInput() SagemakerWorkforceCognitoConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OidcConfigInput`<sup>Optional</sup> <a name="OidcConfigInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.oidcConfigInput"></a>

```go
func OidcConfigInput() SagemakerWorkforceOidcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

---

##### `SourceIpConfigInput`<sup>Optional</sup> <a name="SourceIpConfigInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.sourceIpConfigInput"></a>

```go
func SourceIpConfigInput() SagemakerWorkforceSourceIpConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

---

##### `WorkforceNameInput`<sup>Optional</sup> <a name="WorkforceNameInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceNameInput"></a>

```go
func WorkforceNameInput() *string
```

- *Type:* *string

---

##### `WorkforceVpcConfigInput`<sup>Optional</sup> <a name="WorkforceVpcConfigInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceVpcConfigInput"></a>

```go
func WorkforceVpcConfigInput() SagemakerWorkforceWorkforceVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `WorkforceName`<sup>Required</sup> <a name="WorkforceName" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.workforceName"></a>

```go
func WorkforceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforce.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerWorkforceCognitoConfig <a name="SagemakerWorkforceCognitoConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerworkforce"

&sagemakerworkforce.SagemakerWorkforceCognitoConfig {
	ClientId: *string,
	UserPool: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_id SagemakerWorkforce#client_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.property.userPool">UserPool</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#user_pool SagemakerWorkforce#user_pool}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_id SagemakerWorkforce#client_id}.

---

##### `UserPool`<sup>Required</sup> <a name="UserPool" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig.property.userPool"></a>

```go
UserPool *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#user_pool SagemakerWorkforce#user_pool}.

---

### SagemakerWorkforceConfig <a name="SagemakerWorkforceConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerworkforce"

&sagemakerworkforce.SagemakerWorkforceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WorkforceName: *string,
	CognitoConfig: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig,
	Id: *string,
	OidcConfig: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig,
	SourceIpConfig: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig,
	WorkforceVpcConfig: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.workforceName">WorkforceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#workforce_name SagemakerWorkforce#workforce_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.cognitoConfig">CognitoConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a></code> | cognito_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#id SagemakerWorkforce#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.oidcConfig">OidcConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a></code> | oidc_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.sourceIpConfig">SourceIpConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a></code> | source_ip_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.workforceVpcConfig">WorkforceVpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a></code> | workforce_vpc_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WorkforceName`<sup>Required</sup> <a name="WorkforceName" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.workforceName"></a>

```go
WorkforceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#workforce_name SagemakerWorkforce#workforce_name}.

---

##### `CognitoConfig`<sup>Optional</sup> <a name="CognitoConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.cognitoConfig"></a>

```go
CognitoConfig SagemakerWorkforceCognitoConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

cognito_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#cognito_config SagemakerWorkforce#cognito_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#id SagemakerWorkforce#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OidcConfig`<sup>Optional</sup> <a name="OidcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.oidcConfig"></a>

```go
OidcConfig SagemakerWorkforceOidcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

oidc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#oidc_config SagemakerWorkforce#oidc_config}

---

##### `SourceIpConfig`<sup>Optional</sup> <a name="SourceIpConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.sourceIpConfig"></a>

```go
SourceIpConfig SagemakerWorkforceSourceIpConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

source_ip_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#source_ip_config SagemakerWorkforce#source_ip_config}

---

##### `WorkforceVpcConfig`<sup>Optional</sup> <a name="WorkforceVpcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceConfig.property.workforceVpcConfig"></a>

```go
WorkforceVpcConfig SagemakerWorkforceWorkforceVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

workforce_vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#workforce_vpc_config SagemakerWorkforce#workforce_vpc_config}

---

### SagemakerWorkforceOidcConfig <a name="SagemakerWorkforceOidcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerworkforce"

&sagemakerworkforce.SagemakerWorkforceOidcConfig {
	AuthorizationEndpoint: *string,
	ClientId: *string,
	ClientSecret: *string,
	Issuer: *string,
	JwksUri: *string,
	LogoutEndpoint: *string,
	TokenEndpoint: *string,
	UserInfoEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#authorization_endpoint SagemakerWorkforce#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_id SagemakerWorkforce#client_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_secret SagemakerWorkforce#client_secret}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#issuer SagemakerWorkforce#issuer}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.jwksUri">JwksUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#jwks_uri SagemakerWorkforce#jwks_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.logoutEndpoint">LogoutEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#logout_endpoint SagemakerWorkforce#logout_endpoint}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#token_endpoint SagemakerWorkforce#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#user_info_endpoint SagemakerWorkforce#user_info_endpoint}. |

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.authorizationEndpoint"></a>

```go
AuthorizationEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#authorization_endpoint SagemakerWorkforce#authorization_endpoint}.

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_id SagemakerWorkforce#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#client_secret SagemakerWorkforce#client_secret}.

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#issuer SagemakerWorkforce#issuer}.

---

##### `JwksUri`<sup>Required</sup> <a name="JwksUri" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.jwksUri"></a>

```go
JwksUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#jwks_uri SagemakerWorkforce#jwks_uri}.

---

##### `LogoutEndpoint`<sup>Required</sup> <a name="LogoutEndpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.logoutEndpoint"></a>

```go
LogoutEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#logout_endpoint SagemakerWorkforce#logout_endpoint}.

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#token_endpoint SagemakerWorkforce#token_endpoint}.

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig.property.userInfoEndpoint"></a>

```go
UserInfoEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#user_info_endpoint SagemakerWorkforce#user_info_endpoint}.

---

### SagemakerWorkforceSourceIpConfig <a name="SagemakerWorkforceSourceIpConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerworkforce"

&sagemakerworkforce.SagemakerWorkforceSourceIpConfig {
	Cidrs: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig.property.cidrs">Cidrs</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#cidrs SagemakerWorkforce#cidrs}. |

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig.property.cidrs"></a>

```go
Cidrs *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#cidrs SagemakerWorkforce#cidrs}.

---

### SagemakerWorkforceWorkforceVpcConfig <a name="SagemakerWorkforceWorkforceVpcConfig" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerworkforce"

&sagemakerworkforce.SagemakerWorkforceWorkforceVpcConfig {
	SecurityGroupIds: *[]*string,
	Subnets: *[]*string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#security_group_ids SagemakerWorkforce#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#subnets SagemakerWorkforce#subnets}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#vpc_id SagemakerWorkforce#vpc_id}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#security_group_ids SagemakerWorkforce#security_group_ids}.

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#subnets SagemakerWorkforce#subnets}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce#vpc_id SagemakerWorkforce#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerWorkforceCognitoConfigOutputReference <a name="SagemakerWorkforceCognitoConfigOutputReference" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerworkforce"

sagemakerworkforce.NewSagemakerWorkforceCognitoConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerWorkforceCognitoConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.userPoolInput">UserPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.userPool">UserPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `UserPoolInput`<sup>Optional</sup> <a name="UserPoolInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.userPoolInput"></a>

```go
func UserPoolInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `UserPool`<sup>Required</sup> <a name="UserPool" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.userPool"></a>

```go
func UserPool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerWorkforceCognitoConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceCognitoConfig">SagemakerWorkforceCognitoConfig</a>

---


### SagemakerWorkforceOidcConfigOutputReference <a name="SagemakerWorkforceOidcConfigOutputReference" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerworkforce"

sagemakerworkforce.NewSagemakerWorkforceOidcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerWorkforceOidcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.jwksUriInput">JwksUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.logoutEndpointInput">LogoutEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.userInfoEndpointInput">UserInfoEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.jwksUri">JwksUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.logoutEndpoint">LogoutEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authorizationEndpointInput"></a>

```go
func AuthorizationEndpointInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `JwksUriInput`<sup>Optional</sup> <a name="JwksUriInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.jwksUriInput"></a>

```go
func JwksUriInput() *string
```

- *Type:* *string

---

##### `LogoutEndpointInput`<sup>Optional</sup> <a name="LogoutEndpointInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.logoutEndpointInput"></a>

```go
func LogoutEndpointInput() *string
```

- *Type:* *string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `UserInfoEndpointInput`<sup>Optional</sup> <a name="UserInfoEndpointInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.userInfoEndpointInput"></a>

```go
func UserInfoEndpointInput() *string
```

- *Type:* *string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `JwksUri`<sup>Required</sup> <a name="JwksUri" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.jwksUri"></a>

```go
func JwksUri() *string
```

- *Type:* *string

---

##### `LogoutEndpoint`<sup>Required</sup> <a name="LogoutEndpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.logoutEndpoint"></a>

```go
func LogoutEndpoint() *string
```

- *Type:* *string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.userInfoEndpoint"></a>

```go
func UserInfoEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerWorkforceOidcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceOidcConfig">SagemakerWorkforceOidcConfig</a>

---


### SagemakerWorkforceSourceIpConfigOutputReference <a name="SagemakerWorkforceSourceIpConfigOutputReference" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerworkforce"

sagemakerworkforce.NewSagemakerWorkforceSourceIpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerWorkforceSourceIpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.cidrsInput">CidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.cidrs">Cidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrsInput`<sup>Optional</sup> <a name="CidrsInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.cidrsInput"></a>

```go
func CidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.cidrs"></a>

```go
func Cidrs() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerWorkforceSourceIpConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceSourceIpConfig">SagemakerWorkforceSourceIpConfig</a>

---


### SagemakerWorkforceWorkforceVpcConfigOutputReference <a name="SagemakerWorkforceWorkforceVpcConfigOutputReference" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerworkforce"

sagemakerworkforce.NewSagemakerWorkforceWorkforceVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerWorkforceWorkforceVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetSubnets"></a>

```go
func ResetSubnets()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.resetVpcId"></a>

```go
func ResetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerWorkforceWorkforceVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkforce.SagemakerWorkforceWorkforceVpcConfig">SagemakerWorkforceWorkforceVpcConfig</a>

---



