# `apiGatewayRestApiPut` Submodule <a name="`apiGatewayRestApiPut` Submodule" id="@cdktf/provider-aws.apiGatewayRestApiPut"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayRestApiPut <a name="ApiGatewayRestApiPut" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put aws_api_gateway_rest_api_put}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_rest_api_put.ApiGatewayRestApiPut;

ApiGatewayRestApiPut.Builder.create(Construct scope, java.lang.String id)
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
    .body(java.lang.String)
    .restApiId(java.lang.String)
//  .failOnWarnings(java.lang.Boolean)
//  .failOnWarnings(IResolvable)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .region(java.lang.String)
//  .timeouts(ApiGatewayRestApiPutTimeouts)
//  .triggers(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.body">body</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#body ApiGatewayRestApiPut#body}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#rest_api_id ApiGatewayRestApiPut#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.failOnWarnings">failOnWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#fail_on_warnings ApiGatewayRestApiPut#fail_on_warnings}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#parameters ApiGatewayRestApiPut#parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts">ApiGatewayRestApiPutTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#triggers ApiGatewayRestApiPut#triggers}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.body"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#body ApiGatewayRestApiPut#body}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.restApiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#rest_api_id ApiGatewayRestApiPut#rest_api_id}.

---

##### `failOnWarnings`<sup>Optional</sup> <a name="failOnWarnings" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.failOnWarnings"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#fail_on_warnings ApiGatewayRestApiPut#fail_on_warnings}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#parameters ApiGatewayRestApiPut#parameters}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#region ApiGatewayRestApiPut#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts">ApiGatewayRestApiPutTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#timeouts ApiGatewayRestApiPut#timeouts}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.Initializer.parameter.triggers"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#triggers ApiGatewayRestApiPut#triggers}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetFailOnWarnings">resetFailOnWarnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.putTimeouts"></a>

```java
public void putTimeouts(ApiGatewayRestApiPutTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts">ApiGatewayRestApiPutTimeouts</a>

---

##### `resetFailOnWarnings` <a name="resetFailOnWarnings" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetFailOnWarnings"></a>

```java
public void resetFailOnWarnings()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.resetTriggers"></a>

```java
public void resetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApiGatewayRestApiPut resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_rest_api_put.ApiGatewayRestApiPut;

ApiGatewayRestApiPut.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_rest_api_put.ApiGatewayRestApiPut;

ApiGatewayRestApiPut.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_rest_api_put.ApiGatewayRestApiPut;

ApiGatewayRestApiPut.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_rest_api_put.ApiGatewayRestApiPut;

ApiGatewayRestApiPut.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiGatewayRestApiPut.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApiGatewayRestApiPut resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiGatewayRestApiPut to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiGatewayRestApiPut that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApiGatewayRestApiPut to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference">ApiGatewayRestApiPutTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.failOnWarningsInput">failOnWarningsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.restApiIdInput">restApiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts">ApiGatewayRestApiPutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.triggersInput">triggersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.failOnWarnings">failOnWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.timeouts"></a>

```java
public ApiGatewayRestApiPutTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference">ApiGatewayRestApiPutTimeoutsOutputReference</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `failOnWarningsInput`<sup>Optional</sup> <a name="failOnWarningsInput" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.failOnWarningsInput"></a>

```java
public java.lang.Object getFailOnWarningsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.restApiIdInput"></a>

```java
public java.lang.String getRestApiIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts">ApiGatewayRestApiPutTimeouts</a>

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.triggersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `failOnWarnings`<sup>Required</sup> <a name="failOnWarnings" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.failOnWarnings"></a>

```java
public java.lang.Object getFailOnWarnings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.triggers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPut.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayRestApiPutConfig <a name="ApiGatewayRestApiPutConfig" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_rest_api_put.ApiGatewayRestApiPutConfig;

ApiGatewayRestApiPutConfig.builder()
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
    .body(java.lang.String)
    .restApiId(java.lang.String)
//  .failOnWarnings(java.lang.Boolean)
//  .failOnWarnings(IResolvable)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .region(java.lang.String)
//  .timeouts(ApiGatewayRestApiPutTimeouts)
//  .triggers(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.body">body</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#body ApiGatewayRestApiPut#body}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#rest_api_id ApiGatewayRestApiPut#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.failOnWarnings">failOnWarnings</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#fail_on_warnings ApiGatewayRestApiPut#fail_on_warnings}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#parameters ApiGatewayRestApiPut#parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts">ApiGatewayRestApiPutTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#triggers ApiGatewayRestApiPut#triggers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#body ApiGatewayRestApiPut#body}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#rest_api_id ApiGatewayRestApiPut#rest_api_id}.

---

##### `failOnWarnings`<sup>Optional</sup> <a name="failOnWarnings" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.failOnWarnings"></a>

```java
public java.lang.Object getFailOnWarnings();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#fail_on_warnings ApiGatewayRestApiPut#fail_on_warnings}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#parameters ApiGatewayRestApiPut#parameters}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#region ApiGatewayRestApiPut#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.timeouts"></a>

```java
public ApiGatewayRestApiPutTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts">ApiGatewayRestApiPutTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#timeouts ApiGatewayRestApiPut#timeouts}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutConfig.property.triggers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#triggers ApiGatewayRestApiPut#triggers}.

---

### ApiGatewayRestApiPutTimeouts <a name="ApiGatewayRestApiPutTimeouts" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_rest_api_put.ApiGatewayRestApiPutTimeouts;

ApiGatewayRestApiPutTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/api_gateway_rest_api_put#create ApiGatewayRestApiPut#create}

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayRestApiPutTimeoutsOutputReference <a name="ApiGatewayRestApiPutTimeoutsOutputReference" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_rest_api_put.ApiGatewayRestApiPutTimeoutsOutputReference;

new ApiGatewayRestApiPutTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts">ApiGatewayRestApiPutTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.apiGatewayRestApiPut.ApiGatewayRestApiPutTimeouts">ApiGatewayRestApiPutTimeouts</a>

---



