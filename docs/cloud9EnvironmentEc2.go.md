# `cloud9EnvironmentEc2` Submodule <a name="`cloud9EnvironmentEc2` Submodule" id="@cdktf/provider-aws.cloud9EnvironmentEc2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloud9EnvironmentEc2 <a name="Cloud9EnvironmentEc2" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2 aws_cloud9_environment_ec2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloud9environmentec2"

cloud9environmentec2.NewCloud9EnvironmentEc2(scope Construct, id *string, config Cloud9EnvironmentEc2Config) Cloud9EnvironmentEc2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config">Cloud9EnvironmentEc2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config">Cloud9EnvironmentEc2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetAutomaticStopTimeMinutes">ResetAutomaticStopTimeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetConnectionType">ResetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOwnerArn">ResetOwnerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAutomaticStopTimeMinutes` <a name="ResetAutomaticStopTimeMinutes" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetAutomaticStopTimeMinutes"></a>

```go
func ResetAutomaticStopTimeMinutes()
```

##### `ResetConnectionType` <a name="ResetConnectionType" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetConnectionType"></a>

```go
func ResetConnectionType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetId"></a>

```go
func ResetId()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetImageId"></a>

```go
func ResetImageId()
```

##### `ResetOwnerArn` <a name="ResetOwnerArn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOwnerArn"></a>

```go
func ResetOwnerArn()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloud9environmentec2"

cloud9environmentec2.Cloud9EnvironmentEc2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloud9environmentec2"

cloud9environmentec2.Cloud9EnvironmentEc2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloud9environmentec2"

cloud9environmentec2.Cloud9EnvironmentEc2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutesInput">AutomaticStopTimeMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArnInput">OwnerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutes">AutomaticStopTimeMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArn">OwnerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AutomaticStopTimeMinutesInput`<sup>Optional</sup> <a name="AutomaticStopTimeMinutesInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutesInput"></a>

```go
func AutomaticStopTimeMinutesInput() *f64
```

- *Type:* *f64

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionTypeInput"></a>

```go
func ConnectionTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerArnInput`<sup>Optional</sup> <a name="OwnerArnInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArnInput"></a>

```go
func OwnerArnInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AutomaticStopTimeMinutes`<sup>Required</sup> <a name="AutomaticStopTimeMinutes" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutes"></a>

```go
func AutomaticStopTimeMinutes() *f64
```

- *Type:* *f64

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OwnerArn`<sup>Required</sup> <a name="OwnerArn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArn"></a>

```go
func OwnerArn() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Cloud9EnvironmentEc2Config <a name="Cloud9EnvironmentEc2Config" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloud9environmentec2"

&cloud9environmentec2.Cloud9EnvironmentEc2Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceType: *string,
	Name: *string,
	AutomaticStopTimeMinutes: *f64,
	ConnectionType: *string,
	Description: *string,
	Id: *string,
	ImageId: *string,
	OwnerArn: *string,
	SubnetId: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#instance_type Cloud9EnvironmentEc2#instance_type}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#name Cloud9EnvironmentEc2#name}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.automaticStopTimeMinutes">AutomaticStopTimeMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#automatic_stop_time_minutes Cloud9EnvironmentEc2#automatic_stop_time_minutes}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connectionType">ConnectionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#connection_type Cloud9EnvironmentEc2#connection_type}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#description Cloud9EnvironmentEc2#description}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#id Cloud9EnvironmentEc2#id}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#image_id Cloud9EnvironmentEc2#image_id}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.ownerArn">OwnerArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#owner_arn Cloud9EnvironmentEc2#owner_arn}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#subnet_id Cloud9EnvironmentEc2#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#tags Cloud9EnvironmentEc2#tags}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#tags_all Cloud9EnvironmentEc2#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#instance_type Cloud9EnvironmentEc2#instance_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#name Cloud9EnvironmentEc2#name}.

---

##### `AutomaticStopTimeMinutes`<sup>Optional</sup> <a name="AutomaticStopTimeMinutes" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.automaticStopTimeMinutes"></a>

```go
AutomaticStopTimeMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#automatic_stop_time_minutes Cloud9EnvironmentEc2#automatic_stop_time_minutes}.

---

##### `ConnectionType`<sup>Optional</sup> <a name="ConnectionType" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connectionType"></a>

```go
ConnectionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#connection_type Cloud9EnvironmentEc2#connection_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#description Cloud9EnvironmentEc2#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#id Cloud9EnvironmentEc2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#image_id Cloud9EnvironmentEc2#image_id}.

---

##### `OwnerArn`<sup>Optional</sup> <a name="OwnerArn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.ownerArn"></a>

```go
OwnerArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#owner_arn Cloud9EnvironmentEc2#owner_arn}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#subnet_id Cloud9EnvironmentEc2#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#tags Cloud9EnvironmentEc2#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#tags_all Cloud9EnvironmentEc2#tags_all}.

---



