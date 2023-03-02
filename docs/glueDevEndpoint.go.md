# `glueDevEndpoint` Submodule <a name="`glueDevEndpoint` Submodule" id="@cdktf/provider-aws.glueDevEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueDevEndpoint <a name="GlueDevEndpoint" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint aws_glue_dev_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluedevendpoint"

gluedevendpoint.NewGlueDevEndpoint(scope Construct, id *string, config GlueDevEndpointConfig) GlueDevEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig">GlueDevEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig">GlueDevEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetExtraJarsS3Path">ResetExtraJarsS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetExtraPythonLibsS3Path">ResetExtraPythonLibsS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetGlueVersion">ResetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetNumberOfNodes">ResetNumberOfNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetNumberOfWorkers">ResetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetPublicKey">ResetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetPublicKeys">ResetPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSecurityConfiguration">ResetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetWorkerType">ResetWorkerType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetArguments"></a>

```go
func ResetArguments()
```

##### `ResetExtraJarsS3Path` <a name="ResetExtraJarsS3Path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetExtraJarsS3Path"></a>

```go
func ResetExtraJarsS3Path()
```

##### `ResetExtraPythonLibsS3Path` <a name="ResetExtraPythonLibsS3Path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetExtraPythonLibsS3Path"></a>

```go
func ResetExtraPythonLibsS3Path()
```

##### `ResetGlueVersion` <a name="ResetGlueVersion" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetGlueVersion"></a>

```go
func ResetGlueVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetNumberOfNodes` <a name="ResetNumberOfNodes" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetNumberOfNodes"></a>

```go
func ResetNumberOfNodes()
```

##### `ResetNumberOfWorkers` <a name="ResetNumberOfWorkers" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetNumberOfWorkers"></a>

```go
func ResetNumberOfWorkers()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetPublicKey"></a>

```go
func ResetPublicKey()
```

##### `ResetPublicKeys` <a name="ResetPublicKeys" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetPublicKeys"></a>

```go
func ResetPublicKeys()
```

##### `ResetSecurityConfiguration` <a name="ResetSecurityConfiguration" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSecurityConfiguration"></a>

```go
func ResetSecurityConfiguration()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetWorkerType` <a name="ResetWorkerType" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetWorkerType"></a>

```go
func ResetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluedevendpoint"

gluedevendpoint.GlueDevEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluedevendpoint"

gluedevendpoint.GlueDevEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluedevendpoint"

gluedevendpoint.GlueDevEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.failureReason">FailureReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.privateAddress">PrivateAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicAddress">PublicAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.yarnEndpointAddress">YarnEndpointAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.zeppelinRemoteSparkInterpreterPort">ZeppelinRemoteSparkInterpreterPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.argumentsInput">ArgumentsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraJarsS3PathInput">ExtraJarsS3PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraPythonLibsS3PathInput">ExtraPythonLibsS3PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.glueVersionInput">GlueVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfNodesInput">NumberOfNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfWorkersInput">NumberOfWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeysInput">PublicKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityConfigurationInput">SecurityConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.workerTypeInput">WorkerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.arguments">Arguments</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraJarsS3Path">ExtraJarsS3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraPythonLibsS3Path">ExtraPythonLibsS3Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.glueVersion">GlueVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeys">PublicKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityConfiguration">SecurityConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.workerType">WorkerType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.failureReason"></a>

```go
func FailureReason() *string
```

- *Type:* *string

---

##### `PrivateAddress`<sup>Required</sup> <a name="PrivateAddress" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.privateAddress"></a>

```go
func PrivateAddress() *string
```

- *Type:* *string

---

##### `PublicAddress`<sup>Required</sup> <a name="PublicAddress" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicAddress"></a>

```go
func PublicAddress() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `YarnEndpointAddress`<sup>Required</sup> <a name="YarnEndpointAddress" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.yarnEndpointAddress"></a>

```go
func YarnEndpointAddress() *string
```

- *Type:* *string

---

##### `ZeppelinRemoteSparkInterpreterPort`<sup>Required</sup> <a name="ZeppelinRemoteSparkInterpreterPort" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.zeppelinRemoteSparkInterpreterPort"></a>

```go
func ZeppelinRemoteSparkInterpreterPort() *f64
```

- *Type:* *f64

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.argumentsInput"></a>

```go
func ArgumentsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExtraJarsS3PathInput`<sup>Optional</sup> <a name="ExtraJarsS3PathInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraJarsS3PathInput"></a>

```go
func ExtraJarsS3PathInput() *string
```

- *Type:* *string

---

##### `ExtraPythonLibsS3PathInput`<sup>Optional</sup> <a name="ExtraPythonLibsS3PathInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraPythonLibsS3PathInput"></a>

```go
func ExtraPythonLibsS3PathInput() *string
```

- *Type:* *string

---

##### `GlueVersionInput`<sup>Optional</sup> <a name="GlueVersionInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.glueVersionInput"></a>

```go
func GlueVersionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NumberOfNodesInput`<sup>Optional</sup> <a name="NumberOfNodesInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfNodesInput"></a>

```go
func NumberOfNodesInput() *f64
```

- *Type:* *f64

---

##### `NumberOfWorkersInput`<sup>Optional</sup> <a name="NumberOfWorkersInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfWorkersInput"></a>

```go
func NumberOfWorkersInput() *f64
```

- *Type:* *f64

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `PublicKeysInput`<sup>Optional</sup> <a name="PublicKeysInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeysInput"></a>

```go
func PublicKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SecurityConfigurationInput`<sup>Optional</sup> <a name="SecurityConfigurationInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityConfigurationInput"></a>

```go
func SecurityConfigurationInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkerTypeInput`<sup>Optional</sup> <a name="WorkerTypeInput" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.workerTypeInput"></a>

```go
func WorkerTypeInput() *string
```

- *Type:* *string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.arguments"></a>

```go
func Arguments() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExtraJarsS3Path`<sup>Required</sup> <a name="ExtraJarsS3Path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraJarsS3Path"></a>

```go
func ExtraJarsS3Path() *string
```

- *Type:* *string

---

##### `ExtraPythonLibsS3Path`<sup>Required</sup> <a name="ExtraPythonLibsS3Path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraPythonLibsS3Path"></a>

```go
func ExtraPythonLibsS3Path() *string
```

- *Type:* *string

---

##### `GlueVersion`<sup>Required</sup> <a name="GlueVersion" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.glueVersion"></a>

```go
func GlueVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfNodes"></a>

```go
func NumberOfNodes() *f64
```

- *Type:* *f64

---

##### `NumberOfWorkers`<sup>Required</sup> <a name="NumberOfWorkers" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfWorkers"></a>

```go
func NumberOfWorkers() *f64
```

- *Type:* *f64

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `PublicKeys`<sup>Required</sup> <a name="PublicKeys" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeys"></a>

```go
func PublicKeys() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecurityConfiguration`<sup>Required</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityConfiguration"></a>

```go
func SecurityConfiguration() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkerType`<sup>Required</sup> <a name="WorkerType" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.workerType"></a>

```go
func WorkerType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueDevEndpointConfig <a name="GlueDevEndpointConfig" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluedevendpoint"

&gluedevendpoint.GlueDevEndpointConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RoleArn: *string,
	Arguments: *map[string]*string,
	ExtraJarsS3Path: *string,
	ExtraPythonLibsS3Path: *string,
	GlueVersion: *string,
	Id: *string,
	NumberOfNodes: *f64,
	NumberOfWorkers: *f64,
	PublicKey: *string,
	PublicKeys: *[]*string,
	SecurityConfiguration: *string,
	SecurityGroupIds: *[]*string,
	SubnetId: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	WorkerType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#name GlueDevEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#role_arn GlueDevEndpoint#role_arn}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.arguments">Arguments</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#arguments GlueDevEndpoint#arguments}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.extraJarsS3Path">ExtraJarsS3Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_jars_s3_path GlueDevEndpoint#extra_jars_s3_path}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.extraPythonLibsS3Path">ExtraPythonLibsS3Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_python_libs_s3_path GlueDevEndpoint#extra_python_libs_s3_path}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.glueVersion">GlueVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#glue_version GlueDevEndpoint#glue_version}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#id GlueDevEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_nodes GlueDevEndpoint#number_of_nodes}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_workers GlueDevEndpoint#number_of_workers}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.publicKey">PublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_key GlueDevEndpoint#public_key}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.publicKeys">PublicKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_keys GlueDevEndpoint#public_keys}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.securityConfiguration">SecurityConfiguration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_configuration GlueDevEndpoint#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_group_ids GlueDevEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#subnet_id GlueDevEndpoint#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags GlueDevEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags_all GlueDevEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.workerType">WorkerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#worker_type GlueDevEndpoint#worker_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#name GlueDevEndpoint#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#role_arn GlueDevEndpoint#role_arn}.

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.arguments"></a>

```go
Arguments *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#arguments GlueDevEndpoint#arguments}.

---

##### `ExtraJarsS3Path`<sup>Optional</sup> <a name="ExtraJarsS3Path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.extraJarsS3Path"></a>

```go
ExtraJarsS3Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_jars_s3_path GlueDevEndpoint#extra_jars_s3_path}.

---

##### `ExtraPythonLibsS3Path`<sup>Optional</sup> <a name="ExtraPythonLibsS3Path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.extraPythonLibsS3Path"></a>

```go
ExtraPythonLibsS3Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_python_libs_s3_path GlueDevEndpoint#extra_python_libs_s3_path}.

---

##### `GlueVersion`<sup>Optional</sup> <a name="GlueVersion" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.glueVersion"></a>

```go
GlueVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#glue_version GlueDevEndpoint#glue_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#id GlueDevEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NumberOfNodes`<sup>Optional</sup> <a name="NumberOfNodes" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.numberOfNodes"></a>

```go
NumberOfNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_nodes GlueDevEndpoint#number_of_nodes}.

---

##### `NumberOfWorkers`<sup>Optional</sup> <a name="NumberOfWorkers" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.numberOfWorkers"></a>

```go
NumberOfWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_workers GlueDevEndpoint#number_of_workers}.

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_key GlueDevEndpoint#public_key}.

---

##### `PublicKeys`<sup>Optional</sup> <a name="PublicKeys" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.publicKeys"></a>

```go
PublicKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_keys GlueDevEndpoint#public_keys}.

---

##### `SecurityConfiguration`<sup>Optional</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.securityConfiguration"></a>

```go
SecurityConfiguration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_configuration GlueDevEndpoint#security_configuration}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_group_ids GlueDevEndpoint#security_group_ids}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#subnet_id GlueDevEndpoint#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags GlueDevEndpoint#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags_all GlueDevEndpoint#tags_all}.

---

##### `WorkerType`<sup>Optional</sup> <a name="WorkerType" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.workerType"></a>

```go
WorkerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#worker_type GlueDevEndpoint#worker_type}.

---



