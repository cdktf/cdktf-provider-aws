# `apiGatewayStage` Submodule <a name="`apiGatewayStage` Submodule" id="@cdktf/provider-aws.apiGatewayStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayStage <a name="ApiGatewayStage" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage aws_api_gateway_stage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaystage"

apigatewaystage.NewApiGatewayStage(scope Construct, id *string, config ApiGatewayStageConfig) ApiGatewayStage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig">ApiGatewayStageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig">ApiGatewayStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putAccessLogSettings">PutAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putCanarySettings">PutCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetAccessLogSettings">ResetAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCacheClusterEnabled">ResetCacheClusterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCacheClusterSize">ResetCacheClusterSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCanarySettings">ResetCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetClientCertificateId">ResetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetDocumentationVersion">ResetDocumentationVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetVariables">ResetVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetXrayTracingEnabled">ResetXrayTracingEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAccessLogSettings` <a name="PutAccessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putAccessLogSettings"></a>

```go
func PutAccessLogSettings(value ApiGatewayStageAccessLogSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putAccessLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

---

##### `PutCanarySettings` <a name="PutCanarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putCanarySettings"></a>

```go
func PutCanarySettings(value ApiGatewayStageCanarySettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.putCanarySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

---

##### `ResetAccessLogSettings` <a name="ResetAccessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetAccessLogSettings"></a>

```go
func ResetAccessLogSettings()
```

##### `ResetCacheClusterEnabled` <a name="ResetCacheClusterEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCacheClusterEnabled"></a>

```go
func ResetCacheClusterEnabled()
```

##### `ResetCacheClusterSize` <a name="ResetCacheClusterSize" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCacheClusterSize"></a>

```go
func ResetCacheClusterSize()
```

##### `ResetCanarySettings` <a name="ResetCanarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetCanarySettings"></a>

```go
func ResetCanarySettings()
```

##### `ResetClientCertificateId` <a name="ResetClientCertificateId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetClientCertificateId"></a>

```go
func ResetClientCertificateId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDocumentationVersion` <a name="ResetDocumentationVersion" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetDocumentationVersion"></a>

```go
func ResetDocumentationVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetVariables"></a>

```go
func ResetVariables()
```

##### `ResetXrayTracingEnabled` <a name="ResetXrayTracingEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.resetXrayTracingEnabled"></a>

```go
func ResetXrayTracingEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaystage"

apigatewaystage.ApiGatewayStage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaystage"

apigatewaystage.ApiGatewayStage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaystage"

apigatewaystage.ApiGatewayStage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.accessLogSettings">AccessLogSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference">ApiGatewayStageAccessLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.canarySettings">CanarySettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference">ApiGatewayStageCanarySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.executionArn">ExecutionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.invokeUrl">InvokeUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.webAclArn">WebAclArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.accessLogSettingsInput">AccessLogSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabledInput">CacheClusterEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterSizeInput">CacheClusterSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.canarySettingsInput">CanarySettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.clientCertificateIdInput">ClientCertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.documentationVersionInput">DocumentationVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.restApiIdInput">RestApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.stageNameInput">StageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.variablesInput">VariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabledInput">XrayTracingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabled">CacheClusterEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterSize">CacheClusterSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.clientCertificateId">ClientCertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.documentationVersion">DocumentationVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.restApiId">RestApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.stageName">StageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.variables">Variables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabled">XrayTracingEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessLogSettings`<sup>Required</sup> <a name="AccessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.accessLogSettings"></a>

```go
func AccessLogSettings() ApiGatewayStageAccessLogSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference">ApiGatewayStageAccessLogSettingsOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CanarySettings`<sup>Required</sup> <a name="CanarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.canarySettings"></a>

```go
func CanarySettings() ApiGatewayStageCanarySettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference">ApiGatewayStageCanarySettingsOutputReference</a>

---

##### `ExecutionArn`<sup>Required</sup> <a name="ExecutionArn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.executionArn"></a>

```go
func ExecutionArn() *string
```

- *Type:* *string

---

##### `InvokeUrl`<sup>Required</sup> <a name="InvokeUrl" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.invokeUrl"></a>

```go
func InvokeUrl() *string
```

- *Type:* *string

---

##### `WebAclArn`<sup>Required</sup> <a name="WebAclArn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.webAclArn"></a>

```go
func WebAclArn() *string
```

- *Type:* *string

---

##### `AccessLogSettingsInput`<sup>Optional</sup> <a name="AccessLogSettingsInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.accessLogSettingsInput"></a>

```go
func AccessLogSettingsInput() ApiGatewayStageAccessLogSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

---

##### `CacheClusterEnabledInput`<sup>Optional</sup> <a name="CacheClusterEnabledInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabledInput"></a>

```go
func CacheClusterEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CacheClusterSizeInput`<sup>Optional</sup> <a name="CacheClusterSizeInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterSizeInput"></a>

```go
func CacheClusterSizeInput() *string
```

- *Type:* *string

---

##### `CanarySettingsInput`<sup>Optional</sup> <a name="CanarySettingsInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.canarySettingsInput"></a>

```go
func CanarySettingsInput() ApiGatewayStageCanarySettings
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

---

##### `ClientCertificateIdInput`<sup>Optional</sup> <a name="ClientCertificateIdInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.clientCertificateIdInput"></a>

```go
func ClientCertificateIdInput() *string
```

- *Type:* *string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.deploymentIdInput"></a>

```go
func DeploymentIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DocumentationVersionInput`<sup>Optional</sup> <a name="DocumentationVersionInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.documentationVersionInput"></a>

```go
func DocumentationVersionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.restApiIdInput"></a>

```go
func RestApiIdInput() *string
```

- *Type:* *string

---

##### `StageNameInput`<sup>Optional</sup> <a name="StageNameInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.stageNameInput"></a>

```go
func StageNameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.variablesInput"></a>

```go
func VariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `XrayTracingEnabledInput`<sup>Optional</sup> <a name="XrayTracingEnabledInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabledInput"></a>

```go
func XrayTracingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CacheClusterEnabled`<sup>Required</sup> <a name="CacheClusterEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabled"></a>

```go
func CacheClusterEnabled() interface{}
```

- *Type:* interface{}

---

##### `CacheClusterSize`<sup>Required</sup> <a name="CacheClusterSize" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.cacheClusterSize"></a>

```go
func CacheClusterSize() *string
```

- *Type:* *string

---

##### `ClientCertificateId`<sup>Required</sup> <a name="ClientCertificateId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.clientCertificateId"></a>

```go
func ClientCertificateId() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DocumentationVersion`<sup>Required</sup> <a name="DocumentationVersion" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.documentationVersion"></a>

```go
func DocumentationVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.restApiId"></a>

```go
func RestApiId() *string
```

- *Type:* *string

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.stageName"></a>

```go
func StageName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.variables"></a>

```go
func Variables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `XrayTracingEnabled`<sup>Required</sup> <a name="XrayTracingEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabled"></a>

```go
func XrayTracingEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayStageAccessLogSettings <a name="ApiGatewayStageAccessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaystage"

&apigatewaystage.ApiGatewayStageAccessLogSettings {
	DestinationArn: *string,
	Format: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.destinationArn">DestinationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#destination_arn ApiGatewayStage#destination_arn}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#format ApiGatewayStage#format}. |

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.destinationArn"></a>

```go
DestinationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#destination_arn ApiGatewayStage#destination_arn}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#format ApiGatewayStage#format}.

---

### ApiGatewayStageCanarySettings <a name="ApiGatewayStageCanarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaystage"

&apigatewaystage.ApiGatewayStageCanarySettings {
	PercentTraffic: *f64,
	StageVariableOverrides: *map[string]*string,
	UseStageCache: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.percentTraffic">PercentTraffic</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#percent_traffic ApiGatewayStage#percent_traffic}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.stageVariableOverrides">StageVariableOverrides</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_variable_overrides ApiGatewayStage#stage_variable_overrides}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.useStageCache">UseStageCache</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#use_stage_cache ApiGatewayStage#use_stage_cache}. |

---

##### `PercentTraffic`<sup>Optional</sup> <a name="PercentTraffic" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.percentTraffic"></a>

```go
PercentTraffic *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#percent_traffic ApiGatewayStage#percent_traffic}.

---

##### `StageVariableOverrides`<sup>Optional</sup> <a name="StageVariableOverrides" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.stageVariableOverrides"></a>

```go
StageVariableOverrides *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_variable_overrides ApiGatewayStage#stage_variable_overrides}.

---

##### `UseStageCache`<sup>Optional</sup> <a name="UseStageCache" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings.property.useStageCache"></a>

```go
UseStageCache interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#use_stage_cache ApiGatewayStage#use_stage_cache}.

---

### ApiGatewayStageConfig <a name="ApiGatewayStageConfig" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaystage"

&apigatewaystage.ApiGatewayStageConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DeploymentId: *string,
	RestApiId: *string,
	StageName: *string,
	AccessLogSettings: github.com/cdktf/cdktf-provider-aws-go/aws.apiGatewayStage.ApiGatewayStageAccessLogSettings,
	CacheClusterEnabled: interface{},
	CacheClusterSize: *string,
	CanarySettings: github.com/cdktf/cdktf-provider-aws-go/aws.apiGatewayStage.ApiGatewayStageCanarySettings,
	ClientCertificateId: *string,
	Description: *string,
	DocumentationVersion: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Variables: *map[string]*string,
	XrayTracingEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#deployment_id ApiGatewayStage#deployment_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.restApiId">RestApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#rest_api_id ApiGatewayStage#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.stageName">StageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_name ApiGatewayStage#stage_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.accessLogSettings">AccessLogSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a></code> | access_log_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterEnabled">CacheClusterEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterSize">CacheClusterSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_size ApiGatewayStage#cache_cluster_size}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.canarySettings">CanarySettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a></code> | canary_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.clientCertificateId">ClientCertificateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#client_certificate_id ApiGatewayStage#client_certificate_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#description ApiGatewayStage#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.documentationVersion">DocumentationVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#documentation_version ApiGatewayStage#documentation_version}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#id ApiGatewayStage#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags ApiGatewayStage#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags_all ApiGatewayStage#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.variables">Variables</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#variables ApiGatewayStage#variables}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.xrayTracingEnabled">XrayTracingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.deploymentId"></a>

```go
DeploymentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#deployment_id ApiGatewayStage#deployment_id}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.restApiId"></a>

```go
RestApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#rest_api_id ApiGatewayStage#rest_api_id}.

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.stageName"></a>

```go
StageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#stage_name ApiGatewayStage#stage_name}.

---

##### `AccessLogSettings`<sup>Optional</sup> <a name="AccessLogSettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.accessLogSettings"></a>

```go
AccessLogSettings ApiGatewayStageAccessLogSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

access_log_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#access_log_settings ApiGatewayStage#access_log_settings}

---

##### `CacheClusterEnabled`<sup>Optional</sup> <a name="CacheClusterEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterEnabled"></a>

```go
CacheClusterEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}.

---

##### `CacheClusterSize`<sup>Optional</sup> <a name="CacheClusterSize" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterSize"></a>

```go
CacheClusterSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#cache_cluster_size ApiGatewayStage#cache_cluster_size}.

---

##### `CanarySettings`<sup>Optional</sup> <a name="CanarySettings" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.canarySettings"></a>

```go
CanarySettings ApiGatewayStageCanarySettings
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

canary_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#canary_settings ApiGatewayStage#canary_settings}

---

##### `ClientCertificateId`<sup>Optional</sup> <a name="ClientCertificateId" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.clientCertificateId"></a>

```go
ClientCertificateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#client_certificate_id ApiGatewayStage#client_certificate_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#description ApiGatewayStage#description}.

---

##### `DocumentationVersion`<sup>Optional</sup> <a name="DocumentationVersion" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.documentationVersion"></a>

```go
DocumentationVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#documentation_version ApiGatewayStage#documentation_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#id ApiGatewayStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags ApiGatewayStage#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#tags_all ApiGatewayStage#tags_all}.

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.variables"></a>

```go
Variables *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#variables ApiGatewayStage#variables}.

---

##### `XrayTracingEnabled`<sup>Optional</sup> <a name="XrayTracingEnabled" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageConfig.property.xrayTracingEnabled"></a>

```go
XrayTracingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayStageAccessLogSettingsOutputReference <a name="ApiGatewayStageAccessLogSettingsOutputReference" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaystage"

apigatewaystage.NewApiGatewayStageAccessLogSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiGatewayStageAccessLogSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArnInput">DestinationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArn">DestinationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArnInput"></a>

```go
func DestinationArnInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArn"></a>

```go
func DestinationArn() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiGatewayStageAccessLogSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

---


### ApiGatewayStageCanarySettingsOutputReference <a name="ApiGatewayStageCanarySettingsOutputReference" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewaystage"

apigatewaystage.NewApiGatewayStageCanarySettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApiGatewayStageCanarySettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetPercentTraffic">ResetPercentTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetStageVariableOverrides">ResetStageVariableOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetUseStageCache">ResetUseStageCache</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPercentTraffic` <a name="ResetPercentTraffic" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetPercentTraffic"></a>

```go
func ResetPercentTraffic()
```

##### `ResetStageVariableOverrides` <a name="ResetStageVariableOverrides" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetStageVariableOverrides"></a>

```go
func ResetStageVariableOverrides()
```

##### `ResetUseStageCache` <a name="ResetUseStageCache" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.resetUseStageCache"></a>

```go
func ResetUseStageCache()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.percentTrafficInput">PercentTrafficInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.stageVariableOverridesInput">StageVariableOverridesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.useStageCacheInput">UseStageCacheInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.percentTraffic">PercentTraffic</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.stageVariableOverrides">StageVariableOverrides</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.useStageCache">UseStageCache</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentTrafficInput`<sup>Optional</sup> <a name="PercentTrafficInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.percentTrafficInput"></a>

```go
func PercentTrafficInput() *f64
```

- *Type:* *f64

---

##### `StageVariableOverridesInput`<sup>Optional</sup> <a name="StageVariableOverridesInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.stageVariableOverridesInput"></a>

```go
func StageVariableOverridesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UseStageCacheInput`<sup>Optional</sup> <a name="UseStageCacheInput" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.useStageCacheInput"></a>

```go
func UseStageCacheInput() interface{}
```

- *Type:* interface{}

---

##### `PercentTraffic`<sup>Required</sup> <a name="PercentTraffic" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.percentTraffic"></a>

```go
func PercentTraffic() *f64
```

- *Type:* *f64

---

##### `StageVariableOverrides`<sup>Required</sup> <a name="StageVariableOverrides" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.stageVariableOverrides"></a>

```go
func StageVariableOverrides() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UseStageCache`<sup>Required</sup> <a name="UseStageCache" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.useStageCache"></a>

```go
func UseStageCache() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApiGatewayStageCanarySettings
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayStage.ApiGatewayStageCanarySettings">ApiGatewayStageCanarySettings</a>

---



