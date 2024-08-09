# `elasticsearchVpcEndpoint` Submodule <a name="`elasticsearchVpcEndpoint` Submodule" id="@cdktf/provider-aws.elasticsearchVpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticsearchVpcEndpoint <a name="ElasticsearchVpcEndpoint" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint aws_elasticsearch_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_vpc_endpoint.ElasticsearchVpcEndpoint;

ElasticsearchVpcEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .domainArn(java.lang.String)
    .vpcOptions(ElasticsearchVpcEndpointVpcOptions)
//  .id(java.lang.String)
//  .timeouts(ElasticsearchVpcEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.domainArn">domainArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#domain_arn ElasticsearchVpcEndpoint#domain_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a></code> | vpc_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#id ElasticsearchVpcEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.domainArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#domain_arn ElasticsearchVpcEndpoint#domain_arn}.

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.vpcOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

vpc_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#vpc_options ElasticsearchVpcEndpoint#vpc_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#id ElasticsearchVpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#timeouts ElasticsearchVpcEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putVpcOptions">putVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putTimeouts"></a>

```java
public void putTimeouts(ElasticsearchVpcEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a>

---

##### `putVpcOptions` <a name="putVpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putVpcOptions"></a>

```java
public void putVpcOptions(ElasticsearchVpcEndpointVpcOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.putVpcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ElasticsearchVpcEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_vpc_endpoint.ElasticsearchVpcEndpoint;

ElasticsearchVpcEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_vpc_endpoint.ElasticsearchVpcEndpoint;

ElasticsearchVpcEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_vpc_endpoint.ElasticsearchVpcEndpoint;

ElasticsearchVpcEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_vpc_endpoint.ElasticsearchVpcEndpoint;

ElasticsearchVpcEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ElasticsearchVpcEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ElasticsearchVpcEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ElasticsearchVpcEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ElasticsearchVpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ElasticsearchVpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference">ElasticsearchVpcEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference">ElasticsearchVpcEndpointVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.domainArnInput">domainArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.vpcOptionsInput">vpcOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.domainArn">domainArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.timeouts"></a>

```java
public ElasticsearchVpcEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference">ElasticsearchVpcEndpointTimeoutsOutputReference</a>

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.vpcOptions"></a>

```java
public ElasticsearchVpcEndpointVpcOptionsOutputReference getVpcOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference">ElasticsearchVpcEndpointVpcOptionsOutputReference</a>

---

##### `domainArnInput`<sup>Optional</sup> <a name="domainArnInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.domainArnInput"></a>

```java
public java.lang.String getDomainArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a>

---

##### `vpcOptionsInput`<sup>Optional</sup> <a name="vpcOptionsInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.vpcOptionsInput"></a>

```java
public ElasticsearchVpcEndpointVpcOptions getVpcOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.domainArn"></a>

```java
public java.lang.String getDomainArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticsearchVpcEndpointConfig <a name="ElasticsearchVpcEndpointConfig" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_vpc_endpoint.ElasticsearchVpcEndpointConfig;

ElasticsearchVpcEndpointConfig.builder()
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
    .domainArn(java.lang.String)
    .vpcOptions(ElasticsearchVpcEndpointVpcOptions)
//  .id(java.lang.String)
//  .timeouts(ElasticsearchVpcEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.domainArn">domainArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#domain_arn ElasticsearchVpcEndpoint#domain_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a></code> | vpc_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#id ElasticsearchVpcEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainArn`<sup>Required</sup> <a name="domainArn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.domainArn"></a>

```java
public java.lang.String getDomainArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#domain_arn ElasticsearchVpcEndpoint#domain_arn}.

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.vpcOptions"></a>

```java
public ElasticsearchVpcEndpointVpcOptions getVpcOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

vpc_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#vpc_options ElasticsearchVpcEndpoint#vpc_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#id ElasticsearchVpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointConfig.property.timeouts"></a>

```java
public ElasticsearchVpcEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#timeouts ElasticsearchVpcEndpoint#timeouts}

---

### ElasticsearchVpcEndpointTimeouts <a name="ElasticsearchVpcEndpointTimeouts" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_vpc_endpoint.ElasticsearchVpcEndpointTimeouts;

ElasticsearchVpcEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#create ElasticsearchVpcEndpoint#create}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#delete ElasticsearchVpcEndpoint#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#update ElasticsearchVpcEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#create ElasticsearchVpcEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#delete ElasticsearchVpcEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#update ElasticsearchVpcEndpoint#update}.

---

### ElasticsearchVpcEndpointVpcOptions <a name="ElasticsearchVpcEndpointVpcOptions" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_vpc_endpoint.ElasticsearchVpcEndpointVpcOptions;

ElasticsearchVpcEndpointVpcOptions.builder()
    .subnetIds(java.util.List<java.lang.String>)
//  .securityGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#subnet_ids ElasticsearchVpcEndpoint#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#security_group_ids ElasticsearchVpcEndpoint#security_group_ids}. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#subnet_ids ElasticsearchVpcEndpoint#subnet_ids}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/elasticsearch_vpc_endpoint#security_group_ids ElasticsearchVpcEndpoint#security_group_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticsearchVpcEndpointTimeoutsOutputReference <a name="ElasticsearchVpcEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_vpc_endpoint.ElasticsearchVpcEndpointTimeoutsOutputReference;

new ElasticsearchVpcEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointTimeouts">ElasticsearchVpcEndpointTimeouts</a>

---


### ElasticsearchVpcEndpointVpcOptionsOutputReference <a name="ElasticsearchVpcEndpointVpcOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_vpc_endpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference;

new ElasticsearchVpcEndpointVpcOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptionsOutputReference.property.internalValue"></a>

```java
public ElasticsearchVpcEndpointVpcOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchVpcEndpoint.ElasticsearchVpcEndpointVpcOptions">ElasticsearchVpcEndpointVpcOptions</a>

---



