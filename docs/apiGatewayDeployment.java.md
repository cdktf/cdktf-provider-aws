# `apiGatewayDeployment` Submodule <a name="`apiGatewayDeployment` Submodule" id="@cdktf/provider-aws.apiGatewayDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayDeployment <a name="ApiGatewayDeployment" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment aws_api_gateway_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_deployment.ApiGatewayDeployment;

ApiGatewayDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .restApiId(java.lang.String)
//  .canarySettings(ApiGatewayDeploymentCanarySettings)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .stageDescription(java.lang.String)
//  .stageName(java.lang.String)
//  .triggers(java.util.Map<java.lang.String, java.lang.String>)
//  .variables(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#rest_api_id ApiGatewayDeployment#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.canarySettings">canarySettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings">ApiGatewayDeploymentCanarySettings</a></code> | canary_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#description ApiGatewayDeployment#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#id ApiGatewayDeployment#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.stageDescription">stageDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#stage_description ApiGatewayDeployment#stage_description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.stageName">stageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#stage_name ApiGatewayDeployment#stage_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#triggers ApiGatewayDeployment#triggers}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.variables">variables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#variables ApiGatewayDeployment#variables}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.restApiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#rest_api_id ApiGatewayDeployment#rest_api_id}.

---

##### `canarySettings`<sup>Optional</sup> <a name="canarySettings" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.canarySettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings">ApiGatewayDeploymentCanarySettings</a>

canary_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#canary_settings ApiGatewayDeployment#canary_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#description ApiGatewayDeployment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#id ApiGatewayDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stageDescription`<sup>Optional</sup> <a name="stageDescription" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.stageDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#stage_description ApiGatewayDeployment#stage_description}.

---

##### `stageName`<sup>Optional</sup> <a name="stageName" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.stageName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#stage_name ApiGatewayDeployment#stage_name}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.triggers"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#triggers ApiGatewayDeployment#triggers}.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.Initializer.parameter.variables"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#variables ApiGatewayDeployment#variables}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.putCanarySettings">putCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetCanarySettings">resetCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetStageDescription">resetStageDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetStageName">resetStageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetTriggers">resetTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCanarySettings` <a name="putCanarySettings" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.putCanarySettings"></a>

```java
public void putCanarySettings(ApiGatewayDeploymentCanarySettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.putCanarySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings">ApiGatewayDeploymentCanarySettings</a>

---

##### `resetCanarySettings` <a name="resetCanarySettings" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetCanarySettings"></a>

```java
public void resetCanarySettings()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetStageDescription` <a name="resetStageDescription" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetStageDescription"></a>

```java
public void resetStageDescription()
```

##### `resetStageName` <a name="resetStageName" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetStageName"></a>

```java
public void resetStageName()
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetTriggers"></a>

```java
public void resetTriggers()
```

##### `resetVariables` <a name="resetVariables" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.resetVariables"></a>

```java
public void resetVariables()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiGatewayDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_deployment.ApiGatewayDeployment;

ApiGatewayDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_deployment.ApiGatewayDeployment;

ApiGatewayDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_deployment.ApiGatewayDeployment;

ApiGatewayDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_deployment.ApiGatewayDeployment;

ApiGatewayDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiGatewayDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApiGatewayDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiGatewayDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiGatewayDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApiGatewayDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.canarySettings">canarySettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference">ApiGatewayDeploymentCanarySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.executionArn">executionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.invokeUrl">invokeUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.canarySettingsInput">canarySettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings">ApiGatewayDeploymentCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.restApiIdInput">restApiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.stageDescriptionInput">stageDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.stageNameInput">stageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.triggersInput">triggersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.variablesInput">variablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.stageDescription">stageDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.stageName">stageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.variables">variables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `canarySettings`<sup>Required</sup> <a name="canarySettings" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.canarySettings"></a>

```java
public ApiGatewayDeploymentCanarySettingsOutputReference getCanarySettings();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference">ApiGatewayDeploymentCanarySettingsOutputReference</a>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `executionArn`<sup>Required</sup> <a name="executionArn" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.executionArn"></a>

```java
public java.lang.String getExecutionArn();
```

- *Type:* java.lang.String

---

##### `invokeUrl`<sup>Required</sup> <a name="invokeUrl" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.invokeUrl"></a>

```java
public java.lang.String getInvokeUrl();
```

- *Type:* java.lang.String

---

##### `canarySettingsInput`<sup>Optional</sup> <a name="canarySettingsInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.canarySettingsInput"></a>

```java
public ApiGatewayDeploymentCanarySettings getCanarySettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings">ApiGatewayDeploymentCanarySettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.restApiIdInput"></a>

```java
public java.lang.String getRestApiIdInput();
```

- *Type:* java.lang.String

---

##### `stageDescriptionInput`<sup>Optional</sup> <a name="stageDescriptionInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.stageDescriptionInput"></a>

```java
public java.lang.String getStageDescriptionInput();
```

- *Type:* java.lang.String

---

##### `stageNameInput`<sup>Optional</sup> <a name="stageNameInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.stageNameInput"></a>

```java
public java.lang.String getStageNameInput();
```

- *Type:* java.lang.String

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.triggersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.variablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

---

##### `stageDescription`<sup>Required</sup> <a name="stageDescription" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.stageDescription"></a>

```java
public java.lang.String getStageDescription();
```

- *Type:* java.lang.String

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.stageName"></a>

```java
public java.lang.String getStageName();
```

- *Type:* java.lang.String

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.triggers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.variables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayDeploymentCanarySettings <a name="ApiGatewayDeploymentCanarySettings" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_deployment.ApiGatewayDeploymentCanarySettings;

ApiGatewayDeploymentCanarySettings.builder()
//  .percentTraffic(java.lang.Number)
//  .stageVariableOverrides(java.util.Map<java.lang.String, java.lang.String>)
//  .useStageCache(java.lang.Boolean)
//  .useStageCache(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings.property.percentTraffic">percentTraffic</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#percent_traffic ApiGatewayDeployment#percent_traffic}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#stage_variable_overrides ApiGatewayDeployment#stage_variable_overrides}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings.property.useStageCache">useStageCache</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#use_stage_cache ApiGatewayDeployment#use_stage_cache}. |

---

##### `percentTraffic`<sup>Optional</sup> <a name="percentTraffic" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings.property.percentTraffic"></a>

```java
public java.lang.Number getPercentTraffic();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#percent_traffic ApiGatewayDeployment#percent_traffic}.

---

##### `stageVariableOverrides`<sup>Optional</sup> <a name="stageVariableOverrides" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings.property.stageVariableOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStageVariableOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#stage_variable_overrides ApiGatewayDeployment#stage_variable_overrides}.

---

##### `useStageCache`<sup>Optional</sup> <a name="useStageCache" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings.property.useStageCache"></a>

```java
public java.lang.Object getUseStageCache();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#use_stage_cache ApiGatewayDeployment#use_stage_cache}.

---

### ApiGatewayDeploymentConfig <a name="ApiGatewayDeploymentConfig" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_deployment.ApiGatewayDeploymentConfig;

ApiGatewayDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .restApiId(java.lang.String)
//  .canarySettings(ApiGatewayDeploymentCanarySettings)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .stageDescription(java.lang.String)
//  .stageName(java.lang.String)
//  .triggers(java.util.Map<java.lang.String, java.lang.String>)
//  .variables(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#rest_api_id ApiGatewayDeployment#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.canarySettings">canarySettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings">ApiGatewayDeploymentCanarySettings</a></code> | canary_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#description ApiGatewayDeployment#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#id ApiGatewayDeployment#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.stageDescription">stageDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#stage_description ApiGatewayDeployment#stage_description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.stageName">stageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#stage_name ApiGatewayDeployment#stage_name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#triggers ApiGatewayDeployment#triggers}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.variables">variables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#variables ApiGatewayDeployment#variables}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#rest_api_id ApiGatewayDeployment#rest_api_id}.

---

##### `canarySettings`<sup>Optional</sup> <a name="canarySettings" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.canarySettings"></a>

```java
public ApiGatewayDeploymentCanarySettings getCanarySettings();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings">ApiGatewayDeploymentCanarySettings</a>

canary_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#canary_settings ApiGatewayDeployment#canary_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#description ApiGatewayDeployment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#id ApiGatewayDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `stageDescription`<sup>Optional</sup> <a name="stageDescription" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.stageDescription"></a>

```java
public java.lang.String getStageDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#stage_description ApiGatewayDeployment#stage_description}.

---

##### `stageName`<sup>Optional</sup> <a name="stageName" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.stageName"></a>

```java
public java.lang.String getStageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#stage_name ApiGatewayDeployment#stage_name}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.triggers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#triggers ApiGatewayDeployment#triggers}.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentConfig.property.variables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/api_gateway_deployment#variables ApiGatewayDeployment#variables}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayDeploymentCanarySettingsOutputReference <a name="ApiGatewayDeploymentCanarySettingsOutputReference" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_deployment.ApiGatewayDeploymentCanarySettingsOutputReference;

new ApiGatewayDeploymentCanarySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resetPercentTraffic">resetPercentTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resetStageVariableOverrides">resetStageVariableOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resetUseStageCache">resetUseStageCache</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPercentTraffic` <a name="resetPercentTraffic" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resetPercentTraffic"></a>

```java
public void resetPercentTraffic()
```

##### `resetStageVariableOverrides` <a name="resetStageVariableOverrides" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resetStageVariableOverrides"></a>

```java
public void resetStageVariableOverrides()
```

##### `resetUseStageCache` <a name="resetUseStageCache" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.resetUseStageCache"></a>

```java
public void resetUseStageCache()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.percentTrafficInput">percentTrafficInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.stageVariableOverridesInput">stageVariableOverridesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.useStageCacheInput">useStageCacheInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.percentTraffic">percentTraffic</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.stageVariableOverrides">stageVariableOverrides</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.useStageCache">useStageCache</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings">ApiGatewayDeploymentCanarySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percentTrafficInput`<sup>Optional</sup> <a name="percentTrafficInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.percentTrafficInput"></a>

```java
public java.lang.Number getPercentTrafficInput();
```

- *Type:* java.lang.Number

---

##### `stageVariableOverridesInput`<sup>Optional</sup> <a name="stageVariableOverridesInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.stageVariableOverridesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStageVariableOverridesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useStageCacheInput`<sup>Optional</sup> <a name="useStageCacheInput" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.useStageCacheInput"></a>

```java
public java.lang.Object getUseStageCacheInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `percentTraffic`<sup>Required</sup> <a name="percentTraffic" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.percentTraffic"></a>

```java
public java.lang.Number getPercentTraffic();
```

- *Type:* java.lang.Number

---

##### `stageVariableOverrides`<sup>Required</sup> <a name="stageVariableOverrides" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.stageVariableOverrides"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStageVariableOverrides();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `useStageCache`<sup>Required</sup> <a name="useStageCache" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.useStageCache"></a>

```java
public java.lang.Object getUseStageCache();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettingsOutputReference.property.internalValue"></a>

```java
public ApiGatewayDeploymentCanarySettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDeployment.ApiGatewayDeploymentCanarySettings">ApiGatewayDeploymentCanarySettings</a>

---



