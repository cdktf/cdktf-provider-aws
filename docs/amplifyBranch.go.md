# `amplifyBranch` Submodule <a name="`amplifyBranch` Submodule" id="@cdktf/provider-aws.amplifyBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyBranch <a name="AmplifyBranch" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch aws_amplify_branch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/amplifybranch"

amplifybranch.NewAmplifyBranch(scope Construct, id *string, config AmplifyBranchConfig) AmplifyBranch
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig">AmplifyBranchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig">AmplifyBranchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBackendEnvironmentArn">ResetBackendEnvironmentArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBasicAuthCredentials">ResetBasicAuthCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableAutoBuild">ResetEnableAutoBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableBasicAuth">ResetEnableBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableNotification">ResetEnableNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePerformanceMode">ResetEnablePerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePullRequestPreview">ResetEnablePullRequestPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetFramework">ResetFramework</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetPullRequestEnvironmentName">ResetPullRequestEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetStage">ResetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBackendEnvironmentArn` <a name="ResetBackendEnvironmentArn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBackendEnvironmentArn"></a>

```go
func ResetBackendEnvironmentArn()
```

##### `ResetBasicAuthCredentials` <a name="ResetBasicAuthCredentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBasicAuthCredentials"></a>

```go
func ResetBasicAuthCredentials()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnableAutoBuild` <a name="ResetEnableAutoBuild" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableAutoBuild"></a>

```go
func ResetEnableAutoBuild()
```

##### `ResetEnableBasicAuth` <a name="ResetEnableBasicAuth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableBasicAuth"></a>

```go
func ResetEnableBasicAuth()
```

##### `ResetEnableNotification` <a name="ResetEnableNotification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableNotification"></a>

```go
func ResetEnableNotification()
```

##### `ResetEnablePerformanceMode` <a name="ResetEnablePerformanceMode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePerformanceMode"></a>

```go
func ResetEnablePerformanceMode()
```

##### `ResetEnablePullRequestPreview` <a name="ResetEnablePullRequestPreview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePullRequestPreview"></a>

```go
func ResetEnablePullRequestPreview()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetFramework` <a name="ResetFramework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetFramework"></a>

```go
func ResetFramework()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetId"></a>

```go
func ResetId()
```

##### `ResetPullRequestEnvironmentName` <a name="ResetPullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetPullRequestEnvironmentName"></a>

```go
func ResetPullRequestEnvironmentName()
```

##### `ResetStage` <a name="ResetStage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetStage"></a>

```go
func ResetStage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/amplifybranch"

amplifybranch.AmplifyBranch_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/amplifybranch"

amplifybranch.AmplifyBranch_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/amplifybranch"

amplifybranch.AmplifyBranch_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.associatedResources">AssociatedResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.customDomains">CustomDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.destinationBranch">DestinationBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.sourceBranch">SourceBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArnInput">BackendEnvironmentArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentialsInput">BasicAuthCredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchNameInput">BranchNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuildInput">EnableAutoBuildInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuthInput">EnableBasicAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotificationInput">EnableNotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceModeInput">EnablePerformanceModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreviewInput">EnablePullRequestPreviewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.frameworkInput">FrameworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentNameInput">PullRequestEnvironmentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stageInput">StageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArn">BackendEnvironmentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentials">BasicAuthCredentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchName">BranchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuild">EnableAutoBuild</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuth">EnableBasicAuth</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotification">EnableNotification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceMode">EnablePerformanceMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreview">EnablePullRequestPreview</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.framework">Framework</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentName">PullRequestEnvironmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AssociatedResources`<sup>Required</sup> <a name="AssociatedResources" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.associatedResources"></a>

```go
func AssociatedResources() *[]*string
```

- *Type:* *[]*string

---

##### `CustomDomains`<sup>Required</sup> <a name="CustomDomains" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.customDomains"></a>

```go
func CustomDomains() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationBranch`<sup>Required</sup> <a name="DestinationBranch" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.destinationBranch"></a>

```go
func DestinationBranch() *string
```

- *Type:* *string

---

##### `SourceBranch`<sup>Required</sup> <a name="SourceBranch" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.sourceBranch"></a>

```go
func SourceBranch() *string
```

- *Type:* *string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `BackendEnvironmentArnInput`<sup>Optional</sup> <a name="BackendEnvironmentArnInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArnInput"></a>

```go
func BackendEnvironmentArnInput() *string
```

- *Type:* *string

---

##### `BasicAuthCredentialsInput`<sup>Optional</sup> <a name="BasicAuthCredentialsInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentialsInput"></a>

```go
func BasicAuthCredentialsInput() *string
```

- *Type:* *string

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchNameInput"></a>

```go
func BranchNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnableAutoBuildInput`<sup>Optional</sup> <a name="EnableAutoBuildInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuildInput"></a>

```go
func EnableAutoBuildInput() interface{}
```

- *Type:* interface{}

---

##### `EnableBasicAuthInput`<sup>Optional</sup> <a name="EnableBasicAuthInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuthInput"></a>

```go
func EnableBasicAuthInput() interface{}
```

- *Type:* interface{}

---

##### `EnableNotificationInput`<sup>Optional</sup> <a name="EnableNotificationInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotificationInput"></a>

```go
func EnableNotificationInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePerformanceModeInput`<sup>Optional</sup> <a name="EnablePerformanceModeInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceModeInput"></a>

```go
func EnablePerformanceModeInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePullRequestPreviewInput`<sup>Optional</sup> <a name="EnablePullRequestPreviewInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreviewInput"></a>

```go
func EnablePullRequestPreviewInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FrameworkInput`<sup>Optional</sup> <a name="FrameworkInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.frameworkInput"></a>

```go
func FrameworkInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PullRequestEnvironmentNameInput`<sup>Optional</sup> <a name="PullRequestEnvironmentNameInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentNameInput"></a>

```go
func PullRequestEnvironmentNameInput() *string
```

- *Type:* *string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stageInput"></a>

```go
func StageInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `BackendEnvironmentArn`<sup>Required</sup> <a name="BackendEnvironmentArn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArn"></a>

```go
func BackendEnvironmentArn() *string
```

- *Type:* *string

---

##### `BasicAuthCredentials`<sup>Required</sup> <a name="BasicAuthCredentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentials"></a>

```go
func BasicAuthCredentials() *string
```

- *Type:* *string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchName"></a>

```go
func BranchName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnableAutoBuild`<sup>Required</sup> <a name="EnableAutoBuild" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuild"></a>

```go
func EnableAutoBuild() interface{}
```

- *Type:* interface{}

---

##### `EnableBasicAuth`<sup>Required</sup> <a name="EnableBasicAuth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuth"></a>

```go
func EnableBasicAuth() interface{}
```

- *Type:* interface{}

---

##### `EnableNotification`<sup>Required</sup> <a name="EnableNotification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotification"></a>

```go
func EnableNotification() interface{}
```

- *Type:* interface{}

---

##### `EnablePerformanceMode`<sup>Required</sup> <a name="EnablePerformanceMode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceMode"></a>

```go
func EnablePerformanceMode() interface{}
```

- *Type:* interface{}

---

##### `EnablePullRequestPreview`<sup>Required</sup> <a name="EnablePullRequestPreview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreview"></a>

```go
func EnablePullRequestPreview() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariables"></a>

```go
func EnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.framework"></a>

```go
func Framework() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PullRequestEnvironmentName`<sup>Required</sup> <a name="PullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentName"></a>

```go
func PullRequestEnvironmentName() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyBranchConfig <a name="AmplifyBranchConfig" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/amplifybranch"

&amplifybranch.AmplifyBranchConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	BranchName: *string,
	BackendEnvironmentArn: *string,
	BasicAuthCredentials: *string,
	Description: *string,
	DisplayName: *string,
	EnableAutoBuild: interface{},
	EnableBasicAuth: interface{},
	EnableNotification: interface{},
	EnablePerformanceMode: interface{},
	EnablePullRequestPreview: interface{},
	EnvironmentVariables: *map[string]*string,
	Framework: *string,
	Id: *string,
	PullRequestEnvironmentName: *string,
	Stage: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.appId">AppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#app_id AmplifyBranch#app_id}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.branchName">BranchName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#branch_name AmplifyBranch#branch_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.backendEnvironmentArn">BackendEnvironmentArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#backend_environment_arn AmplifyBranch#backend_environment_arn}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.basicAuthCredentials">BasicAuthCredentials</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#basic_auth_credentials AmplifyBranch#basic_auth_credentials}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#description AmplifyBranch#description}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#display_name AmplifyBranch#display_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableAutoBuild">EnableAutoBuild</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableBasicAuth">EnableBasicAuth</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableNotification">EnableNotification</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_notification AmplifyBranch#enable_notification}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePerformanceMode">EnablePerformanceMode</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePullRequestPreview">EnablePullRequestPreview</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#environment_variables AmplifyBranch#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.framework">Framework</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#framework AmplifyBranch#framework}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#id AmplifyBranch#id}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.pullRequestEnvironmentName">PullRequestEnvironmentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.stage">Stage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#stage AmplifyBranch#stage}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags AmplifyBranch#tags}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags_all AmplifyBranch#tags_all}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.ttl">Ttl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#ttl AmplifyBranch#ttl}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#app_id AmplifyBranch#app_id}.

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.branchName"></a>

```go
BranchName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#branch_name AmplifyBranch#branch_name}.

---

##### `BackendEnvironmentArn`<sup>Optional</sup> <a name="BackendEnvironmentArn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.backendEnvironmentArn"></a>

```go
BackendEnvironmentArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#backend_environment_arn AmplifyBranch#backend_environment_arn}.

---

##### `BasicAuthCredentials`<sup>Optional</sup> <a name="BasicAuthCredentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.basicAuthCredentials"></a>

```go
BasicAuthCredentials *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#basic_auth_credentials AmplifyBranch#basic_auth_credentials}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#description AmplifyBranch#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#display_name AmplifyBranch#display_name}.

---

##### `EnableAutoBuild`<sup>Optional</sup> <a name="EnableAutoBuild" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableAutoBuild"></a>

```go
EnableAutoBuild interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}.

---

##### `EnableBasicAuth`<sup>Optional</sup> <a name="EnableBasicAuth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableBasicAuth"></a>

```go
EnableBasicAuth interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}.

---

##### `EnableNotification`<sup>Optional</sup> <a name="EnableNotification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableNotification"></a>

```go
EnableNotification interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_notification AmplifyBranch#enable_notification}.

---

##### `EnablePerformanceMode`<sup>Optional</sup> <a name="EnablePerformanceMode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePerformanceMode"></a>

```go
EnablePerformanceMode interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}.

---

##### `EnablePullRequestPreview`<sup>Optional</sup> <a name="EnablePullRequestPreview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePullRequestPreview"></a>

```go
EnablePullRequestPreview interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.environmentVariables"></a>

```go
EnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#environment_variables AmplifyBranch#environment_variables}.

---

##### `Framework`<sup>Optional</sup> <a name="Framework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.framework"></a>

```go
Framework *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#framework AmplifyBranch#framework}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#id AmplifyBranch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PullRequestEnvironmentName`<sup>Optional</sup> <a name="PullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.pullRequestEnvironmentName"></a>

```go
PullRequestEnvironmentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}.

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.stage"></a>

```go
Stage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#stage AmplifyBranch#stage}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags AmplifyBranch#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags_all AmplifyBranch#tags_all}.

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#ttl AmplifyBranch#ttl}.

---



