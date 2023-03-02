# `dataAwsElasticsearchDomain` Submodule <a name="`dataAwsElasticsearchDomain` Submodule" id="@cdktf/provider-aws.dataAwsElasticsearchDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticsearchDomain <a name="DataAwsElasticsearchDomain" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain aws_elasticsearch_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomain(scope: Construct, id: string, config: DataAwsElasticsearchDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig">DataAwsElasticsearchDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig">DataAwsElasticsearchDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isConstruct"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformElement"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformDataSource"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.accessPolicies">accessPolicies</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.advancedOptions">advancedOptions</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.advancedSecurityOptions">advancedSecurityOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList">DataAwsElasticsearchDomainAdvancedSecurityOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.autoTuneOptions">autoTuneOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList">DataAwsElasticsearchDomainAutoTuneOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList">DataAwsElasticsearchDomainClusterConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.cognitoOptions">cognitoOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList">DataAwsElasticsearchDomainCognitoOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.created">created</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.deleted">deleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.ebsOptions">ebsOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList">DataAwsElasticsearchDomainEbsOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.elasticsearchVersion">elasticsearchVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.encryptionAtRest">encryptionAtRest</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList">DataAwsElasticsearchDomainEncryptionAtRestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.kibanaEndpoint">kibanaEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.logPublishingOptions">logPublishingOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList">DataAwsElasticsearchDomainLogPublishingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.nodeToNodeEncryption">nodeToNodeEncryption</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList">DataAwsElasticsearchDomainNodeToNodeEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.processing">processing</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.snapshotOptions">snapshotOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList">DataAwsElasticsearchDomainSnapshotOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList">DataAwsElasticsearchDomainVpcOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessPolicies`<sup>Required</sup> <a name="accessPolicies" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.accessPolicies"></a>

```typescript
public readonly accessPolicies: string;
```

- *Type:* string

---

##### `advancedOptions`<sup>Required</sup> <a name="advancedOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.advancedOptions"></a>

```typescript
public readonly advancedOptions: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `advancedSecurityOptions`<sup>Required</sup> <a name="advancedSecurityOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.advancedSecurityOptions"></a>

```typescript
public readonly advancedSecurityOptions: DataAwsElasticsearchDomainAdvancedSecurityOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList">DataAwsElasticsearchDomainAdvancedSecurityOptionsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoTuneOptions`<sup>Required</sup> <a name="autoTuneOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.autoTuneOptions"></a>

```typescript
public readonly autoTuneOptions: DataAwsElasticsearchDomainAutoTuneOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList">DataAwsElasticsearchDomainAutoTuneOptionsList</a>

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.clusterConfig"></a>

```typescript
public readonly clusterConfig: DataAwsElasticsearchDomainClusterConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList">DataAwsElasticsearchDomainClusterConfigList</a>

---

##### `cognitoOptions`<sup>Required</sup> <a name="cognitoOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.cognitoOptions"></a>

```typescript
public readonly cognitoOptions: DataAwsElasticsearchDomainCognitoOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList">DataAwsElasticsearchDomainCognitoOptionsList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.created"></a>

```typescript
public readonly created: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.deleted"></a>

```typescript
public readonly deleted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `ebsOptions`<sup>Required</sup> <a name="ebsOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.ebsOptions"></a>

```typescript
public readonly ebsOptions: DataAwsElasticsearchDomainEbsOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList">DataAwsElasticsearchDomainEbsOptionsList</a>

---

##### `elasticsearchVersion`<sup>Required</sup> <a name="elasticsearchVersion" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.elasticsearchVersion"></a>

```typescript
public readonly elasticsearchVersion: string;
```

- *Type:* string

---

##### `encryptionAtRest`<sup>Required</sup> <a name="encryptionAtRest" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.encryptionAtRest"></a>

```typescript
public readonly encryptionAtRest: DataAwsElasticsearchDomainEncryptionAtRestList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList">DataAwsElasticsearchDomainEncryptionAtRestList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `kibanaEndpoint`<sup>Required</sup> <a name="kibanaEndpoint" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.kibanaEndpoint"></a>

```typescript
public readonly kibanaEndpoint: string;
```

- *Type:* string

---

##### `logPublishingOptions`<sup>Required</sup> <a name="logPublishingOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.logPublishingOptions"></a>

```typescript
public readonly logPublishingOptions: DataAwsElasticsearchDomainLogPublishingOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList">DataAwsElasticsearchDomainLogPublishingOptionsList</a>

---

##### `nodeToNodeEncryption`<sup>Required</sup> <a name="nodeToNodeEncryption" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.nodeToNodeEncryption"></a>

```typescript
public readonly nodeToNodeEncryption: DataAwsElasticsearchDomainNodeToNodeEncryptionList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList">DataAwsElasticsearchDomainNodeToNodeEncryptionList</a>

---

##### `processing`<sup>Required</sup> <a name="processing" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.processing"></a>

```typescript
public readonly processing: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `snapshotOptions`<sup>Required</sup> <a name="snapshotOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.snapshotOptions"></a>

```typescript
public readonly snapshotOptions: DataAwsElasticsearchDomainSnapshotOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList">DataAwsElasticsearchDomainSnapshotOptionsList</a>

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.vpcOptions"></a>

```typescript
public readonly vpcOptions: DataAwsElasticsearchDomainVpcOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList">DataAwsElasticsearchDomainVpcOptionsList</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticsearchDomainAdvancedSecurityOptions <a name="DataAwsElasticsearchDomainAdvancedSecurityOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptions.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

const dataAwsElasticsearchDomainAdvancedSecurityOptions: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptions = { ... }
```


### DataAwsElasticsearchDomainAutoTuneOptions <a name="DataAwsElasticsearchDomainAutoTuneOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptions.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

const dataAwsElasticsearchDomainAutoTuneOptions: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptions = { ... }
```


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

const dataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule = { ... }
```


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

const dataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration = { ... }
```


### DataAwsElasticsearchDomainClusterConfig <a name="DataAwsElasticsearchDomainClusterConfig" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfig.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

const dataAwsElasticsearchDomainClusterConfig: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfig = { ... }
```


### DataAwsElasticsearchDomainClusterConfigColdStorageOptions <a name="DataAwsElasticsearchDomainClusterConfigColdStorageOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptions.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

const dataAwsElasticsearchDomainClusterConfigColdStorageOptions: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptions = { ... }
```


### DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig <a name="DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

const dataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig = { ... }
```


### DataAwsElasticsearchDomainCognitoOptions <a name="DataAwsElasticsearchDomainCognitoOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptions.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

const dataAwsElasticsearchDomainCognitoOptions: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptions = { ... }
```


### DataAwsElasticsearchDomainConfig <a name="DataAwsElasticsearchDomainConfig" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

const dataAwsElasticsearchDomainConfig: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#domain_name DataAwsElasticsearchDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#id DataAwsElasticsearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#tags DataAwsElasticsearchDomain#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#domain_name DataAwsElasticsearchDomain#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#id DataAwsElasticsearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain#tags DataAwsElasticsearchDomain#tags}.

---

### DataAwsElasticsearchDomainEbsOptions <a name="DataAwsElasticsearchDomainEbsOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptions.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

const dataAwsElasticsearchDomainEbsOptions: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptions = { ... }
```


### DataAwsElasticsearchDomainEncryptionAtRest <a name="DataAwsElasticsearchDomainEncryptionAtRest" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRest.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

const dataAwsElasticsearchDomainEncryptionAtRest: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRest = { ... }
```


### DataAwsElasticsearchDomainLogPublishingOptions <a name="DataAwsElasticsearchDomainLogPublishingOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptions.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

const dataAwsElasticsearchDomainLogPublishingOptions: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptions = { ... }
```


### DataAwsElasticsearchDomainNodeToNodeEncryption <a name="DataAwsElasticsearchDomainNodeToNodeEncryption" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryption.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

const dataAwsElasticsearchDomainNodeToNodeEncryption: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryption = { ... }
```


### DataAwsElasticsearchDomainSnapshotOptions <a name="DataAwsElasticsearchDomainSnapshotOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptions.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

const dataAwsElasticsearchDomainSnapshotOptions: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptions = { ... }
```


### DataAwsElasticsearchDomainVpcOptions <a name="DataAwsElasticsearchDomainVpcOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptions.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

const dataAwsElasticsearchDomainVpcOptions: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsElasticsearchDomainAdvancedSecurityOptionsList <a name="DataAwsElasticsearchDomainAdvancedSecurityOptionsList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference <a name="DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">internalUserDatabaseEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptions">DataAwsElasticsearchDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalUserDatabaseEnabled`<sup>Required</sup> <a name="internalUserDatabaseEnabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```typescript
public readonly internalUserDatabaseEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainAdvancedSecurityOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptions">DataAwsElasticsearchDomainAdvancedSecurityOptions</a>

---


### DataAwsElasticsearchDomainAutoTuneOptionsList <a name="DataAwsElasticsearchDomainAutoTuneOptionsList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainAutoTuneOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence">cronExpressionForRecurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt">startAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronExpressionForRecurrence`<sup>Required</sup> <a name="cronExpressionForRecurrence" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence"></a>

```typescript
public readonly cronExpressionForRecurrence: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration"></a>

```typescript
public readonly duration: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList</a>

---

##### `startAt`<sup>Required</sup> <a name="startAt" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt"></a>

```typescript
public readonly startAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>

---


### DataAwsElasticsearchDomainAutoTuneOptionsOutputReference <a name="DataAwsElasticsearchDomainAutoTuneOptionsOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable">rollbackOnDisable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptions">DataAwsElasticsearchDomainAutoTuneOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList</a>

---

##### `rollbackOnDisable`<sup>Required</sup> <a name="rollbackOnDisable" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable"></a>

```typescript
public readonly rollbackOnDisable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainAutoTuneOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptions">DataAwsElasticsearchDomainAutoTuneOptions</a>

---


### DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList <a name="DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference <a name="DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptions">DataAwsElasticsearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainClusterConfigColdStorageOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptions">DataAwsElasticsearchDomainClusterConfigColdStorageOptions</a>

---


### DataAwsElasticsearchDomainClusterConfigList <a name="DataAwsElasticsearchDomainClusterConfigList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainClusterConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainClusterConfigOutputReference <a name="DataAwsElasticsearchDomainClusterConfigOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.coldStorageOptions">coldStorageOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList">DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCount">dedicatedMasterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">dedicatedMasterEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterType">dedicatedMasterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmCount">warmCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmEnabled">warmEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmType">warmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig">zoneAwarenessConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList">DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">zoneAwarenessEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfig">DataAwsElasticsearchDomainClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coldStorageOptions`<sup>Required</sup> <a name="coldStorageOptions" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```typescript
public readonly coldStorageOptions: DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList">DataAwsElasticsearchDomainClusterConfigColdStorageOptionsList</a>

---

##### `dedicatedMasterCount`<sup>Required</sup> <a name="dedicatedMasterCount" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```typescript
public readonly dedicatedMasterCount: number;
```

- *Type:* number

---

##### `dedicatedMasterEnabled`<sup>Required</sup> <a name="dedicatedMasterEnabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```typescript
public readonly dedicatedMasterEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `dedicatedMasterType`<sup>Required</sup> <a name="dedicatedMasterType" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```typescript
public readonly dedicatedMasterType: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `warmCount`<sup>Required</sup> <a name="warmCount" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmCount"></a>

```typescript
public readonly warmCount: number;
```

- *Type:* number

---

##### `warmEnabled`<sup>Required</sup> <a name="warmEnabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmEnabled"></a>

```typescript
public readonly warmEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `warmType`<sup>Required</sup> <a name="warmType" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmType"></a>

```typescript
public readonly warmType: string;
```

- *Type:* string

---

##### `zoneAwarenessConfig`<sup>Required</sup> <a name="zoneAwarenessConfig" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```typescript
public readonly zoneAwarenessConfig: DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList">DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList</a>

---

##### `zoneAwarenessEnabled`<sup>Required</sup> <a name="zoneAwarenessEnabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```typescript
public readonly zoneAwarenessEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainClusterConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfig">DataAwsElasticsearchDomainClusterConfig</a>

---


### DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList <a name="DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference <a name="DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">availabilityZoneCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig">DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneCount`<sup>Required</sup> <a name="availabilityZoneCount" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```typescript
public readonly availabilityZoneCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig">DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig</a>

---


### DataAwsElasticsearchDomainCognitoOptionsList <a name="DataAwsElasticsearchDomainCognitoOptionsList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainCognitoOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainCognitoOptionsOutputReference <a name="DataAwsElasticsearchDomainCognitoOptionsOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptions">DataAwsElasticsearchDomainCognitoOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainCognitoOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptions">DataAwsElasticsearchDomainCognitoOptions</a>

---


### DataAwsElasticsearchDomainEbsOptionsList <a name="DataAwsElasticsearchDomainEbsOptionsList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainEbsOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainEbsOptionsOutputReference <a name="DataAwsElasticsearchDomainEbsOptionsOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabled">ebsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptions">DataAwsElasticsearchDomainEbsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebsEnabled`<sup>Required</sup> <a name="ebsEnabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```typescript
public readonly ebsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainEbsOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptions">DataAwsElasticsearchDomainEbsOptions</a>

---


### DataAwsElasticsearchDomainEncryptionAtRestList <a name="DataAwsElasticsearchDomainEncryptionAtRestList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainEncryptionAtRestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainEncryptionAtRestOutputReference <a name="DataAwsElasticsearchDomainEncryptionAtRestOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRest">DataAwsElasticsearchDomainEncryptionAtRest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainEncryptionAtRest;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRest">DataAwsElasticsearchDomainEncryptionAtRest</a>

---


### DataAwsElasticsearchDomainLogPublishingOptionsList <a name="DataAwsElasticsearchDomainLogPublishingOptionsList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainLogPublishingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainLogPublishingOptionsOutputReference <a name="DataAwsElasticsearchDomainLogPublishingOptionsOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptions">DataAwsElasticsearchDomainLogPublishingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainLogPublishingOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptions">DataAwsElasticsearchDomainLogPublishingOptions</a>

---


### DataAwsElasticsearchDomainNodeToNodeEncryptionList <a name="DataAwsElasticsearchDomainNodeToNodeEncryptionList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference <a name="DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryption">DataAwsElasticsearchDomainNodeToNodeEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainNodeToNodeEncryption;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryption">DataAwsElasticsearchDomainNodeToNodeEncryption</a>

---


### DataAwsElasticsearchDomainSnapshotOptionsList <a name="DataAwsElasticsearchDomainSnapshotOptionsList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainSnapshotOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainSnapshotOptionsOutputReference <a name="DataAwsElasticsearchDomainSnapshotOptionsOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">automatedSnapshotStartHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptions">DataAwsElasticsearchDomainSnapshotOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automatedSnapshotStartHour`<sup>Required</sup> <a name="automatedSnapshotStartHour" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```typescript
public readonly automatedSnapshotStartHour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainSnapshotOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptions">DataAwsElasticsearchDomainSnapshotOptions</a>

---


### DataAwsElasticsearchDomainVpcOptionsList <a name="DataAwsElasticsearchDomainVpcOptionsList" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainVpcOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainVpcOptionsOutputReference <a name="DataAwsElasticsearchDomainVpcOptionsOutputReference" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/provider-aws'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptions">DataAwsElasticsearchDomainVpcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainVpcOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptions">DataAwsElasticsearchDomainVpcOptions</a>

---



