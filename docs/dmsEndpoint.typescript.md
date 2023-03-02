# `dmsEndpoint` Submodule <a name="`dmsEndpoint` Submodule" id="@cdktf/provider-aws.dmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsEndpoint <a name="DmsEndpoint" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint aws_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

new dmsEndpoint.DmsEndpoint(scope: Construct, id: string, config: DmsEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig">DmsEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig">DmsEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings">putElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings">putKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings">putKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings">putMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings">putRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings">putRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings">putS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings">resetElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes">resetExtraConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKafkaSettings">resetKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKinesisSettings">resetKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetMongodbSettings">resetMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRedisSettings">resetRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRedshiftSettings">resetRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetS3Settings">resetS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerArn">resetSecretsManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetServiceAccessRole">resetServiceAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSslMode">resetSslMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putElasticsearchSettings` <a name="putElasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings"></a>

```typescript
public putElasticsearchSettings(value: DmsEndpointElasticsearchSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putElasticsearchSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `putKafkaSettings` <a name="putKafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings"></a>

```typescript
public putKafkaSettings(value: DmsEndpointKafkaSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `putKinesisSettings` <a name="putKinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings"></a>

```typescript
public putKinesisSettings(value: DmsEndpointKinesisSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `putMongodbSettings` <a name="putMongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings"></a>

```typescript
public putMongodbSettings(value: DmsEndpointMongodbSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putMongodbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---

##### `putRedisSettings` <a name="putRedisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings"></a>

```typescript
public putRedisSettings(value: DmsEndpointRedisSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `putRedshiftSettings` <a name="putRedshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings"></a>

```typescript
public putRedshiftSettings(value: DmsEndpointRedshiftSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putRedshiftSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `putS3Settings` <a name="putS3Settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings"></a>

```typescript
public putS3Settings(value: DmsEndpointS3Settings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: DmsEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

---

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetElasticsearchSettings` <a name="resetElasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings"></a>

```typescript
public resetElasticsearchSettings(): void
```

##### `resetExtraConnectionAttributes` <a name="resetExtraConnectionAttributes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes"></a>

```typescript
public resetExtraConnectionAttributes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKafkaSettings` <a name="resetKafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKafkaSettings"></a>

```typescript
public resetKafkaSettings(): void
```

##### `resetKinesisSettings` <a name="resetKinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKinesisSettings"></a>

```typescript
public resetKinesisSettings(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetMongodbSettings` <a name="resetMongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetMongodbSettings"></a>

```typescript
public resetMongodbSettings(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetRedisSettings` <a name="resetRedisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRedisSettings"></a>

```typescript
public resetRedisSettings(): void
```

##### `resetRedshiftSettings` <a name="resetRedshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetRedshiftSettings"></a>

```typescript
public resetRedshiftSettings(): void
```

##### `resetS3Settings` <a name="resetS3Settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetS3Settings"></a>

```typescript
public resetS3Settings(): void
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerAccessRoleArn"></a>

```typescript
public resetSecretsManagerAccessRoleArn(): void
```

##### `resetSecretsManagerArn` <a name="resetSecretsManagerArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSecretsManagerArn"></a>

```typescript
public resetSecretsManagerArn(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetServiceAccessRole` <a name="resetServiceAccessRole" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetServiceAccessRole"></a>

```typescript
public resetServiceAccessRole(): void
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetSslMode"></a>

```typescript
public resetSslMode(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

dmsEndpoint.DmsEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

dmsEndpoint.DmsEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

dmsEndpoint.DmsEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointArn">endpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettings">kinesisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettings">mongodbSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference">DmsEndpointMongodbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettings">redisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.s3Settings">s3Settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference">DmsEndpointS3SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference">DmsEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput">elasticsearchSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointIdInput">endpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.engineNameInput">engineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput">extraConnectionAttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput">kafkaSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput">kinesisSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettingsInput">mongodbSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettingsInput">redisSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput">redshiftSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.s3SettingsInput">s3SettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArnInput">secretsManagerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRoleInput">serviceAccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.engineName">engineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArn">secretsManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRole">serviceAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `elasticsearchSettings`<sup>Required</sup> <a name="elasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings"></a>

```typescript
public readonly elasticsearchSettings: DmsEndpointElasticsearchSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a>

---

##### `endpointArn`<sup>Required</sup> <a name="endpointArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointArn"></a>

```typescript
public readonly endpointArn: string;
```

- *Type:* string

---

##### `kafkaSettings`<sup>Required</sup> <a name="kafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettings"></a>

```typescript
public readonly kafkaSettings: DmsEndpointKafkaSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a>

---

##### `kinesisSettings`<sup>Required</sup> <a name="kinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettings"></a>

```typescript
public readonly kinesisSettings: DmsEndpointKinesisSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a>

---

##### `mongodbSettings`<sup>Required</sup> <a name="mongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettings"></a>

```typescript
public readonly mongodbSettings: DmsEndpointMongodbSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference">DmsEndpointMongodbSettingsOutputReference</a>

---

##### `redisSettings`<sup>Required</sup> <a name="redisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettings"></a>

```typescript
public readonly redisSettings: DmsEndpointRedisSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a>

---

##### `redshiftSettings`<sup>Required</sup> <a name="redshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettings"></a>

```typescript
public readonly redshiftSettings: DmsEndpointRedshiftSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a>

---

##### `s3Settings`<sup>Required</sup> <a name="s3Settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.s3Settings"></a>

```typescript
public readonly s3Settings: DmsEndpointS3SettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference">DmsEndpointS3SettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: DmsEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference">DmsEndpointTimeoutsOutputReference</a>

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `elasticsearchSettingsInput`<sup>Optional</sup> <a name="elasticsearchSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput"></a>

```typescript
public readonly elasticsearchSettingsInput: DmsEndpointElasticsearchSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointIdInput"></a>

```typescript
public readonly endpointIdInput: string;
```

- *Type:* string

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `engineNameInput`<sup>Optional</sup> <a name="engineNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.engineNameInput"></a>

```typescript
public readonly engineNameInput: string;
```

- *Type:* string

---

##### `extraConnectionAttributesInput`<sup>Optional</sup> <a name="extraConnectionAttributesInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput"></a>

```typescript
public readonly extraConnectionAttributesInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kafkaSettingsInput`<sup>Optional</sup> <a name="kafkaSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput"></a>

```typescript
public readonly kafkaSettingsInput: DmsEndpointKafkaSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `kinesisSettingsInput`<sup>Optional</sup> <a name="kinesisSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput"></a>

```typescript
public readonly kinesisSettingsInput: DmsEndpointKinesisSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `mongodbSettingsInput`<sup>Optional</sup> <a name="mongodbSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.mongodbSettingsInput"></a>

```typescript
public readonly mongodbSettingsInput: DmsEndpointMongodbSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `redisSettingsInput`<sup>Optional</sup> <a name="redisSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redisSettingsInput"></a>

```typescript
public readonly redisSettingsInput: DmsEndpointRedisSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `redshiftSettingsInput`<sup>Optional</sup> <a name="redshiftSettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput"></a>

```typescript
public readonly redshiftSettingsInput: DmsEndpointRedshiftSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `s3SettingsInput`<sup>Optional</sup> <a name="s3SettingsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.s3SettingsInput"></a>

```typescript
public readonly s3SettingsInput: DmsEndpointS3Settings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerArnInput`<sup>Optional</sup> <a name="secretsManagerArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArnInput"></a>

```typescript
public readonly secretsManagerArnInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `serviceAccessRoleInput`<sup>Optional</sup> <a name="serviceAccessRoleInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRoleInput"></a>

```typescript
public readonly serviceAccessRoleInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DmsEndpointTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a> | cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.engineName"></a>

```typescript
public readonly engineName: string;
```

- *Type:* string

---

##### `extraConnectionAttributes`<sup>Required</sup> <a name="extraConnectionAttributes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes"></a>

```typescript
public readonly extraConnectionAttributes: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerArn`<sup>Required</sup> <a name="secretsManagerArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.secretsManagerArn"></a>

```typescript
public readonly secretsManagerArn: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `serviceAccessRole`<sup>Required</sup> <a name="serviceAccessRole" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.serviceAccessRole"></a>

```typescript
public readonly serviceAccessRole: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsEndpointConfig <a name="DmsEndpointConfig" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

const dmsEndpointConfig: dmsEndpoint.DmsEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointId">endpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointType">endpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.engineName">engineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#engine_name DmsEndpoint#engine_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#database_name DmsEndpoint#database_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | elasticsearch_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#id DmsEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | kafka_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings">kinesisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | kinesis_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.mongodbSettings">mongodbSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | mongodb_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#password DmsEndpoint#password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redisSettings">redisSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | redis_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | redshift_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.s3Settings">s3Settings</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | s3_settings block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerArn">secretsManagerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serviceAccessRole">serviceAccessRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role DmsEndpoint#service_access_role}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.sslMode">sslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags DmsEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags_all DmsEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#username DmsEndpoint#username}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}.

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.engineName"></a>

```typescript
public readonly engineName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#engine_name DmsEndpoint#engine_name}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#database_name DmsEndpoint#database_name}.

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="elasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings"></a>

```typescript
public readonly elasticsearchSettings: DmsEndpointElasticsearchSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

elasticsearch_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="extraConnectionAttributes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes"></a>

```typescript
public readonly extraConnectionAttributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#id DmsEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings"></a>

```typescript
public readonly kafkaSettings: DmsEndpointKafkaSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

kafka_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}

---

##### `kinesisSettings`<sup>Optional</sup> <a name="kinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings"></a>

```typescript
public readonly kinesisSettings: DmsEndpointKinesisSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

kinesis_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}.

---

##### `mongodbSettings`<sup>Optional</sup> <a name="mongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.mongodbSettings"></a>

```typescript
public readonly mongodbSettings: DmsEndpointMongodbSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

mongodb_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#mongodb_settings DmsEndpoint#mongodb_settings}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#password DmsEndpoint#password}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}.

---

##### `redisSettings`<sup>Optional</sup> <a name="redisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redisSettings"></a>

```typescript
public readonly redisSettings: DmsEndpointRedisSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

redis_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#redis_settings DmsEndpoint#redis_settings}

---

##### `redshiftSettings`<sup>Optional</sup> <a name="redshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings"></a>

```typescript
public readonly redshiftSettings: DmsEndpointRedshiftSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

redshift_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}

---

##### `s3Settings`<sup>Optional</sup> <a name="s3Settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.s3Settings"></a>

```typescript
public readonly s3Settings: DmsEndpointS3Settings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

s3_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#s3_settings DmsEndpoint#s3_settings}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}.

---

##### `secretsManagerArn`<sup>Optional</sup> <a name="secretsManagerArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.secretsManagerArn"></a>

```typescript
public readonly secretsManagerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}.

---

##### `serviceAccessRole`<sup>Optional</sup> <a name="serviceAccessRole" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.serviceAccessRole"></a>

```typescript
public readonly serviceAccessRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role DmsEndpoint#service_access_role}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags DmsEndpoint#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#tags_all DmsEndpoint#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DmsEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#timeouts DmsEndpoint#timeouts}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#username DmsEndpoint#username}.

---

### DmsEndpointElasticsearchSettings <a name="DmsEndpointElasticsearchSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

const dmsEndpointElasticsearchSettings: dmsEndpoint.DmsEndpointElasticsearchSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri">endpointUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration">errorRetryDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage">fullLoadErrorPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}. |

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}.

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `errorRetryDuration`<sup>Optional</sup> <a name="errorRetryDuration" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration"></a>

```typescript
public readonly errorRetryDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}.

---

##### `fullLoadErrorPercentage`<sup>Optional</sup> <a name="fullLoadErrorPercentage" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage"></a>

```typescript
public readonly fullLoadErrorPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}.

---

### DmsEndpointKafkaSettings <a name="DmsEndpointKafkaSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

const dmsEndpointKafkaSettings: dmsEndpoint.DmsEndpointKafkaSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.broker">broker</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#broker DmsEndpoint#broker}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails">includeControlDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_control_details DmsEndpoint#include_control_details}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue">includePartitionValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat">messageFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_format DmsEndpoint#message_format}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes">messageMaxBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix">noHexPrefix</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword">saslPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#sasl_password DmsEndpoint#sasl_password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUsername">saslUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#sasl_username DmsEndpoint#sasl_username}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol">securityProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#security_protocol DmsEndpoint#security_protocol}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn">sslClientCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn">sslClientKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword">sslClientKeyPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.topic">topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#topic DmsEndpoint#topic}. |

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.broker"></a>

```typescript
public readonly broker: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#broker DmsEndpoint#broker}.

---

##### `includeControlDetails`<sup>Optional</sup> <a name="includeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails"></a>

```typescript
public readonly includeControlDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_control_details DmsEndpoint#include_control_details}.

---

##### `includeNullAndEmpty`<sup>Optional</sup> <a name="includeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty"></a>

```typescript
public readonly includeNullAndEmpty: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}.

---

##### `includePartitionValue`<sup>Optional</sup> <a name="includePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue"></a>

```typescript
public readonly includePartitionValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}.

---

##### `includeTableAlterOperations`<sup>Optional</sup> <a name="includeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations"></a>

```typescript
public readonly includeTableAlterOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}.

---

##### `includeTransactionDetails`<sup>Optional</sup> <a name="includeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails"></a>

```typescript
public readonly includeTransactionDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}.

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_format DmsEndpoint#message_format}.

---

##### `messageMaxBytes`<sup>Optional</sup> <a name="messageMaxBytes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes"></a>

```typescript
public readonly messageMaxBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}.

---

##### `noHexPrefix`<sup>Optional</sup> <a name="noHexPrefix" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix"></a>

```typescript
public readonly noHexPrefix: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}.

---

##### `partitionIncludeSchemaTable`<sup>Optional</sup> <a name="partitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable"></a>

```typescript
public readonly partitionIncludeSchemaTable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}.

---

##### `saslPassword`<sup>Optional</sup> <a name="saslPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword"></a>

```typescript
public readonly saslPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#sasl_password DmsEndpoint#sasl_password}.

---

##### `saslUsername`<sup>Optional</sup> <a name="saslUsername" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUsername"></a>

```typescript
public readonly saslUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#sasl_username DmsEndpoint#sasl_username}.

---

##### `securityProtocol`<sup>Optional</sup> <a name="securityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol"></a>

```typescript
public readonly securityProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#security_protocol DmsEndpoint#security_protocol}.

---

##### `sslCaCertificateArn`<sup>Optional</sup> <a name="sslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn"></a>

```typescript
public readonly sslCaCertificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}.

---

##### `sslClientCertificateArn`<sup>Optional</sup> <a name="sslClientCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn"></a>

```typescript
public readonly sslClientCertificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}.

---

##### `sslClientKeyArn`<sup>Optional</sup> <a name="sslClientKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn"></a>

```typescript
public readonly sslClientKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}.

---

##### `sslClientKeyPassword`<sup>Optional</sup> <a name="sslClientKeyPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword"></a>

```typescript
public readonly sslClientKeyPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#topic DmsEndpoint#topic}.

---

### DmsEndpointKinesisSettings <a name="DmsEndpointKinesisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

const dmsEndpointKinesisSettings: dmsEndpoint.DmsEndpointKinesisSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails">includeControlDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_control_details DmsEndpoint#include_control_details}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue">includePartitionValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat">messageFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_format DmsEndpoint#message_format}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn">streamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#stream_arn DmsEndpoint#stream_arn}. |

---

##### `includeControlDetails`<sup>Optional</sup> <a name="includeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails"></a>

```typescript
public readonly includeControlDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_control_details DmsEndpoint#include_control_details}.

---

##### `includeNullAndEmpty`<sup>Optional</sup> <a name="includeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty"></a>

```typescript
public readonly includeNullAndEmpty: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}.

---

##### `includePartitionValue`<sup>Optional</sup> <a name="includePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue"></a>

```typescript
public readonly includePartitionValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}.

---

##### `includeTableAlterOperations`<sup>Optional</sup> <a name="includeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations"></a>

```typescript
public readonly includeTableAlterOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}.

---

##### `includeTransactionDetails`<sup>Optional</sup> <a name="includeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails"></a>

```typescript
public readonly includeTransactionDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}.

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#message_format DmsEndpoint#message_format}.

---

##### `partitionIncludeSchemaTable`<sup>Optional</sup> <a name="partitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable"></a>

```typescript
public readonly partitionIncludeSchemaTable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}.

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `streamArn`<sup>Optional</sup> <a name="streamArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#stream_arn DmsEndpoint#stream_arn}.

---

### DmsEndpointMongodbSettings <a name="DmsEndpointMongodbSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

const dmsEndpointMongodbSettings: dmsEndpoint.DmsEndpointMongodbSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authMechanism">authMechanism</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authSource">authSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_source DmsEndpoint#auth_source}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authType">authType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_type DmsEndpoint#auth_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.docsToInvestigate">docsToInvestigate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.extractDocId">extractDocId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.nestingLevel">nestingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#nesting_level DmsEndpoint#nesting_level}. |

---

##### `authMechanism`<sup>Optional</sup> <a name="authMechanism" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authMechanism"></a>

```typescript
public readonly authMechanism: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}.

---

##### `authSource`<sup>Optional</sup> <a name="authSource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authSource"></a>

```typescript
public readonly authSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_source DmsEndpoint#auth_source}.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_type DmsEndpoint#auth_type}.

---

##### `docsToInvestigate`<sup>Optional</sup> <a name="docsToInvestigate" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.docsToInvestigate"></a>

```typescript
public readonly docsToInvestigate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}.

---

##### `extractDocId`<sup>Optional</sup> <a name="extractDocId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.extractDocId"></a>

```typescript
public readonly extractDocId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}.

---

##### `nestingLevel`<sup>Optional</sup> <a name="nestingLevel" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings.property.nestingLevel"></a>

```typescript
public readonly nestingLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#nesting_level DmsEndpoint#nesting_level}.

---

### DmsEndpointRedisSettings <a name="DmsEndpointRedisSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

const dmsEndpointRedisSettings: dmsEndpoint.DmsEndpointRedisSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authType">authType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_type DmsEndpoint#auth_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword">authPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_password DmsEndpoint#auth_password}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName">authUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol">sslSecurityProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}. |

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_type DmsEndpoint#auth_type}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#port DmsEndpoint#port}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_name DmsEndpoint#server_name}.

---

##### `authPassword`<sup>Optional</sup> <a name="authPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword"></a>

```typescript
public readonly authPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_password DmsEndpoint#auth_password}.

---

##### `authUserName`<sup>Optional</sup> <a name="authUserName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName"></a>

```typescript
public readonly authUserName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}.

---

##### `sslCaCertificateArn`<sup>Optional</sup> <a name="sslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn"></a>

```typescript
public readonly sslCaCertificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}.

---

##### `sslSecurityProtocol`<sup>Optional</sup> <a name="sslSecurityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol"></a>

```typescript
public readonly sslSecurityProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}.

---

### DmsEndpointRedshiftSettings <a name="DmsEndpointRedshiftSettings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

const dmsEndpointRedshiftSettings: dmsEndpoint.DmsEndpointRedshiftSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder">bucketFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |

---

##### `bucketFolder`<sup>Optional</sup> <a name="bucketFolder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder"></a>

```typescript
public readonly bucketFolder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}.

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}.

---

##### `serverSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId"></a>

```typescript
public readonly serverSideEncryptionKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}.

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

### DmsEndpointS3Settings <a name="DmsEndpointS3Settings" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

const dmsEndpointS3Settings: dmsEndpoint.DmsEndpointS3Settings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.addColumnName">addColumnName</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#add_column_name DmsEndpoint#add_column_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.bucketFolder">bucketFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cannedAclForObjects">cannedAclForObjects</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#canned_acl_for_objects DmsEndpoint#canned_acl_for_objects}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsAndUpdates">cdcInsertsAndUpdates</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_inserts_and_updates DmsEndpoint#cdc_inserts_and_updates}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsOnly">cdcInsertsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_inserts_only DmsEndpoint#cdc_inserts_only}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcMaxBatchInterval">cdcMaxBatchInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_max_batch_interval DmsEndpoint#cdc_max_batch_interval}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcMinFileSize">cdcMinFileSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_min_file_size DmsEndpoint#cdc_min_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcPath">cdcPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_path DmsEndpoint#cdc_path}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.compressionType">compressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#compression_type DmsEndpoint#compression_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvDelimiter">csvDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_delimiter DmsEndpoint#csv_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvNoSupValue">csvNoSupValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_no_sup_value DmsEndpoint#csv_no_sup_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvNullValue">csvNullValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_null_value DmsEndpoint#csv_null_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvRowDelimiter">csvRowDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_row_delimiter DmsEndpoint#csv_row_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dataFormat">dataFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_format DmsEndpoint#data_format}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dataPageSize">dataPageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_page_size DmsEndpoint#data_page_size}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionDelimiter">datePartitionDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_delimiter DmsEndpoint#date_partition_delimiter}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionEnabled">datePartitionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_enabled DmsEndpoint#date_partition_enabled}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionSequence">datePartitionSequence</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_sequence DmsEndpoint#date_partition_sequence}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dictPageSizeLimit">dictPageSizeLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#dict_page_size_limit DmsEndpoint#dict_page_size_limit}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.enableStatistics">enableStatistics</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#enable_statistics DmsEndpoint#enable_statistics}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.encodingType">encodingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encoding_type DmsEndpoint#encoding_type}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.externalTableDefinition">externalTableDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#external_table_definition DmsEndpoint#external_table_definition}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeaderRows">ignoreHeaderRows</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ignore_header_rows DmsEndpoint#ignore_header_rows}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeadersRow">ignoreHeadersRow</a></code> | <code>number</code> | This setting has no effect, is deprecated, and will be removed in a future version. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.includeOpForFullLoad">includeOpForFullLoad</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_op_for_full_load DmsEndpoint#include_op_for_full_load}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#max_file_size DmsEndpoint#max_file_size}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.parquetTimestampInMillisecond">parquetTimestampInMillisecond</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.parquetVersion">parquetVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_version DmsEndpoint#parquet_version}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.preserveTransactions">preserveTransactions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#preserve_transactions DmsEndpoint#preserve_transactions}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.rfc4180">rfc4180</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#rfc_4180 DmsEndpoint#rfc_4180}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.rowGroupLength">rowGroupLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#row_group_length DmsEndpoint#row_group_length}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.timestampColumnName">timestampColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#timestamp_column_name DmsEndpoint#timestamp_column_name}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.useCsvNoSupValue">useCsvNoSupValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#use_csv_no_sup_value DmsEndpoint#use_csv_no_sup_value}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.useTaskStartTimeForFullLoadTimestamp">useTaskStartTimeForFullLoadTimestamp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#use_task_start_time_for_full_load_timestamp DmsEndpoint#use_task_start_time_for_full_load_timestamp}. |

---

##### `addColumnName`<sup>Optional</sup> <a name="addColumnName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.addColumnName"></a>

```typescript
public readonly addColumnName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#add_column_name DmsEndpoint#add_column_name}.

---

##### `bucketFolder`<sup>Optional</sup> <a name="bucketFolder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.bucketFolder"></a>

```typescript
public readonly bucketFolder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#bucket_name DmsEndpoint#bucket_name}.

---

##### `cannedAclForObjects`<sup>Optional</sup> <a name="cannedAclForObjects" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cannedAclForObjects"></a>

```typescript
public readonly cannedAclForObjects: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#canned_acl_for_objects DmsEndpoint#canned_acl_for_objects}.

---

##### `cdcInsertsAndUpdates`<sup>Optional</sup> <a name="cdcInsertsAndUpdates" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsAndUpdates"></a>

```typescript
public readonly cdcInsertsAndUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_inserts_and_updates DmsEndpoint#cdc_inserts_and_updates}.

---

##### `cdcInsertsOnly`<sup>Optional</sup> <a name="cdcInsertsOnly" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsOnly"></a>

```typescript
public readonly cdcInsertsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_inserts_only DmsEndpoint#cdc_inserts_only}.

---

##### `cdcMaxBatchInterval`<sup>Optional</sup> <a name="cdcMaxBatchInterval" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcMaxBatchInterval"></a>

```typescript
public readonly cdcMaxBatchInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_max_batch_interval DmsEndpoint#cdc_max_batch_interval}.

---

##### `cdcMinFileSize`<sup>Optional</sup> <a name="cdcMinFileSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcMinFileSize"></a>

```typescript
public readonly cdcMinFileSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_min_file_size DmsEndpoint#cdc_min_file_size}.

---

##### `cdcPath`<sup>Optional</sup> <a name="cdcPath" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.cdcPath"></a>

```typescript
public readonly cdcPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#cdc_path DmsEndpoint#cdc_path}.

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#compression_type DmsEndpoint#compression_type}.

---

##### `csvDelimiter`<sup>Optional</sup> <a name="csvDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvDelimiter"></a>

```typescript
public readonly csvDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_delimiter DmsEndpoint#csv_delimiter}.

---

##### `csvNoSupValue`<sup>Optional</sup> <a name="csvNoSupValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvNoSupValue"></a>

```typescript
public readonly csvNoSupValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_no_sup_value DmsEndpoint#csv_no_sup_value}.

---

##### `csvNullValue`<sup>Optional</sup> <a name="csvNullValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvNullValue"></a>

```typescript
public readonly csvNullValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_null_value DmsEndpoint#csv_null_value}.

---

##### `csvRowDelimiter`<sup>Optional</sup> <a name="csvRowDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.csvRowDelimiter"></a>

```typescript
public readonly csvRowDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#csv_row_delimiter DmsEndpoint#csv_row_delimiter}.

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_format DmsEndpoint#data_format}.

---

##### `dataPageSize`<sup>Optional</sup> <a name="dataPageSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dataPageSize"></a>

```typescript
public readonly dataPageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#data_page_size DmsEndpoint#data_page_size}.

---

##### `datePartitionDelimiter`<sup>Optional</sup> <a name="datePartitionDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionDelimiter"></a>

```typescript
public readonly datePartitionDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_delimiter DmsEndpoint#date_partition_delimiter}.

---

##### `datePartitionEnabled`<sup>Optional</sup> <a name="datePartitionEnabled" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionEnabled"></a>

```typescript
public readonly datePartitionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_enabled DmsEndpoint#date_partition_enabled}.

---

##### `datePartitionSequence`<sup>Optional</sup> <a name="datePartitionSequence" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionSequence"></a>

```typescript
public readonly datePartitionSequence: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#date_partition_sequence DmsEndpoint#date_partition_sequence}.

---

##### `dictPageSizeLimit`<sup>Optional</sup> <a name="dictPageSizeLimit" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.dictPageSizeLimit"></a>

```typescript
public readonly dictPageSizeLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#dict_page_size_limit DmsEndpoint#dict_page_size_limit}.

---

##### `enableStatistics`<sup>Optional</sup> <a name="enableStatistics" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.enableStatistics"></a>

```typescript
public readonly enableStatistics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#enable_statistics DmsEndpoint#enable_statistics}.

---

##### `encodingType`<sup>Optional</sup> <a name="encodingType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.encodingType"></a>

```typescript
public readonly encodingType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encoding_type DmsEndpoint#encoding_type}.

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}.

---

##### `externalTableDefinition`<sup>Optional</sup> <a name="externalTableDefinition" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.externalTableDefinition"></a>

```typescript
public readonly externalTableDefinition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#external_table_definition DmsEndpoint#external_table_definition}.

---

##### `ignoreHeaderRows`<sup>Optional</sup> <a name="ignoreHeaderRows" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeaderRows"></a>

```typescript
public readonly ignoreHeaderRows: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ignore_header_rows DmsEndpoint#ignore_header_rows}.

---

##### `ignoreHeadersRow`<sup>Optional</sup> <a name="ignoreHeadersRow" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeadersRow"></a>

```typescript
public readonly ignoreHeadersRow: number;
```

- *Type:* number

This setting has no effect, is deprecated, and will be removed in a future version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#ignore_headers_row DmsEndpoint#ignore_headers_row}

---

##### `includeOpForFullLoad`<sup>Optional</sup> <a name="includeOpForFullLoad" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.includeOpForFullLoad"></a>

```typescript
public readonly includeOpForFullLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#include_op_for_full_load DmsEndpoint#include_op_for_full_load}.

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#max_file_size DmsEndpoint#max_file_size}.

---

##### `parquetTimestampInMillisecond`<sup>Optional</sup> <a name="parquetTimestampInMillisecond" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.parquetTimestampInMillisecond"></a>

```typescript
public readonly parquetTimestampInMillisecond: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}.

---

##### `parquetVersion`<sup>Optional</sup> <a name="parquetVersion" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.parquetVersion"></a>

```typescript
public readonly parquetVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#parquet_version DmsEndpoint#parquet_version}.

---

##### `preserveTransactions`<sup>Optional</sup> <a name="preserveTransactions" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.preserveTransactions"></a>

```typescript
public readonly preserveTransactions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#preserve_transactions DmsEndpoint#preserve_transactions}.

---

##### `rfc4180`<sup>Optional</sup> <a name="rfc4180" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.rfc4180"></a>

```typescript
public readonly rfc4180: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#rfc_4180 DmsEndpoint#rfc_4180}.

---

##### `rowGroupLength`<sup>Optional</sup> <a name="rowGroupLength" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.rowGroupLength"></a>

```typescript
public readonly rowGroupLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#row_group_length DmsEndpoint#row_group_length}.

---

##### `serverSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.serverSideEncryptionKmsKeyId"></a>

```typescript
public readonly serverSideEncryptionKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}.

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `timestampColumnName`<sup>Optional</sup> <a name="timestampColumnName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.timestampColumnName"></a>

```typescript
public readonly timestampColumnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#timestamp_column_name DmsEndpoint#timestamp_column_name}.

---

##### `useCsvNoSupValue`<sup>Optional</sup> <a name="useCsvNoSupValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.useCsvNoSupValue"></a>

```typescript
public readonly useCsvNoSupValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#use_csv_no_sup_value DmsEndpoint#use_csv_no_sup_value}.

---

##### `useTaskStartTimeForFullLoadTimestamp`<sup>Optional</sup> <a name="useTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings.property.useTaskStartTimeForFullLoadTimestamp"></a>

```typescript
public readonly useTaskStartTimeForFullLoadTimestamp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#use_task_start_time_for_full_load_timestamp DmsEndpoint#use_task_start_time_for_full_load_timestamp}.

---

### DmsEndpointTimeouts <a name="DmsEndpointTimeouts" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

const dmsEndpointTimeouts: dmsEndpoint.DmsEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#create DmsEndpoint#create}. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#delete DmsEndpoint#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#create DmsEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_endpoint#delete DmsEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsEndpointElasticsearchSettingsOutputReference <a name="DmsEndpointElasticsearchSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

new dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration">resetErrorRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage">resetFullLoadErrorPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorRetryDuration` <a name="resetErrorRetryDuration" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration"></a>

```typescript
public resetErrorRetryDuration(): void
```

##### `resetFullLoadErrorPercentage` <a name="resetFullLoadErrorPercentage" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage"></a>

```typescript
public resetFullLoadErrorPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput">endpointUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput">errorRetryDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput">fullLoadErrorPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">endpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">errorRetryDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">fullLoadErrorPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointUriInput`<sup>Optional</sup> <a name="endpointUriInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput"></a>

```typescript
public readonly endpointUriInput: string;
```

- *Type:* string

---

##### `errorRetryDurationInput`<sup>Optional</sup> <a name="errorRetryDurationInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput"></a>

```typescript
public readonly errorRetryDurationInput: number;
```

- *Type:* number

---

##### `fullLoadErrorPercentageInput`<sup>Optional</sup> <a name="fullLoadErrorPercentageInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput"></a>

```typescript
public readonly fullLoadErrorPercentageInput: number;
```

- *Type:* number

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```typescript
public readonly serviceAccessRoleArnInput: string;
```

- *Type:* string

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

---

##### `errorRetryDuration`<sup>Required</sup> <a name="errorRetryDuration" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```typescript
public readonly errorRetryDuration: number;
```

- *Type:* number

---

##### `fullLoadErrorPercentage`<sup>Required</sup> <a name="fullLoadErrorPercentage" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```typescript
public readonly fullLoadErrorPercentage: number;
```

- *Type:* number

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsEndpointElasticsearchSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---


### DmsEndpointKafkaSettingsOutputReference <a name="DmsEndpointKafkaSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

new dmsEndpoint.DmsEndpointKafkaSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails">resetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty">resetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue">resetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations">resetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails">resetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes">resetMessageMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix">resetNoHexPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable">resetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword">resetSaslPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUsername">resetSaslUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol">resetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn">resetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn">resetSslClientCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn">resetSslClientKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword">resetSslClientKeyPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeControlDetails` <a name="resetIncludeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails"></a>

```typescript
public resetIncludeControlDetails(): void
```

##### `resetIncludeNullAndEmpty` <a name="resetIncludeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```typescript
public resetIncludeNullAndEmpty(): void
```

##### `resetIncludePartitionValue` <a name="resetIncludePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue"></a>

```typescript
public resetIncludePartitionValue(): void
```

##### `resetIncludeTableAlterOperations` <a name="resetIncludeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```typescript
public resetIncludeTableAlterOperations(): void
```

##### `resetIncludeTransactionDetails` <a name="resetIncludeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails"></a>

```typescript
public resetIncludeTransactionDetails(): void
```

##### `resetMessageFormat` <a name="resetMessageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat"></a>

```typescript
public resetMessageFormat(): void
```

##### `resetMessageMaxBytes` <a name="resetMessageMaxBytes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes"></a>

```typescript
public resetMessageMaxBytes(): void
```

##### `resetNoHexPrefix` <a name="resetNoHexPrefix" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix"></a>

```typescript
public resetNoHexPrefix(): void
```

##### `resetPartitionIncludeSchemaTable` <a name="resetPartitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```typescript
public resetPartitionIncludeSchemaTable(): void
```

##### `resetSaslPassword` <a name="resetSaslPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword"></a>

```typescript
public resetSaslPassword(): void
```

##### `resetSaslUsername` <a name="resetSaslUsername" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUsername"></a>

```typescript
public resetSaslUsername(): void
```

##### `resetSecurityProtocol` <a name="resetSecurityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol"></a>

```typescript
public resetSecurityProtocol(): void
```

##### `resetSslCaCertificateArn` <a name="resetSslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn"></a>

```typescript
public resetSslCaCertificateArn(): void
```

##### `resetSslClientCertificateArn` <a name="resetSslClientCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn"></a>

```typescript
public resetSslClientCertificateArn(): void
```

##### `resetSslClientKeyArn` <a name="resetSslClientKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn"></a>

```typescript
public resetSslClientKeyArn(): void
```

##### `resetSslClientKeyPassword` <a name="resetSslClientKeyPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword"></a>

```typescript
public resetSslClientKeyPassword(): void
```

##### `resetTopic` <a name="resetTopic" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic"></a>

```typescript
public resetTopic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput">brokerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput">includeControlDetailsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput">includeNullAndEmptyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput">includePartitionValueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput">includeTableAlterOperationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput">includeTransactionDetailsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput">messageMaxBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput">noHexPrefixInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput">partitionIncludeSchemaTableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput">saslPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsernameInput">saslUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput">securityProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput">sslCaCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput">sslClientCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput">sslClientKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput">sslClientKeyPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker">broker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">includeControlDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">includePartitionValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat">messageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">messageMaxBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">noHexPrefix</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword">saslPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsername">saslUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol">securityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">sslClientCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">sslClientKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">sslClientKeyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `brokerInput`<sup>Optional</sup> <a name="brokerInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput"></a>

```typescript
public readonly brokerInput: string;
```

- *Type:* string

---

##### `includeControlDetailsInput`<sup>Optional</sup> <a name="includeControlDetailsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput"></a>

```typescript
public readonly includeControlDetailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeNullAndEmptyInput`<sup>Optional</sup> <a name="includeNullAndEmptyInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```typescript
public readonly includeNullAndEmptyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includePartitionValueInput`<sup>Optional</sup> <a name="includePartitionValueInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput"></a>

```typescript
public readonly includePartitionValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTableAlterOperationsInput`<sup>Optional</sup> <a name="includeTableAlterOperationsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```typescript
public readonly includeTableAlterOperationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTransactionDetailsInput`<sup>Optional</sup> <a name="includeTransactionDetailsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```typescript
public readonly includeTransactionDetailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput"></a>

```typescript
public readonly messageFormatInput: string;
```

- *Type:* string

---

##### `messageMaxBytesInput`<sup>Optional</sup> <a name="messageMaxBytesInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput"></a>

```typescript
public readonly messageMaxBytesInput: number;
```

- *Type:* number

---

##### `noHexPrefixInput`<sup>Optional</sup> <a name="noHexPrefixInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput"></a>

```typescript
public readonly noHexPrefixInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `partitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="partitionIncludeSchemaTableInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```typescript
public readonly partitionIncludeSchemaTableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `saslPasswordInput`<sup>Optional</sup> <a name="saslPasswordInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput"></a>

```typescript
public readonly saslPasswordInput: string;
```

- *Type:* string

---

##### `saslUsernameInput`<sup>Optional</sup> <a name="saslUsernameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsernameInput"></a>

```typescript
public readonly saslUsernameInput: string;
```

- *Type:* string

---

##### `securityProtocolInput`<sup>Optional</sup> <a name="securityProtocolInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput"></a>

```typescript
public readonly securityProtocolInput: string;
```

- *Type:* string

---

##### `sslCaCertificateArnInput`<sup>Optional</sup> <a name="sslCaCertificateArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```typescript
public readonly sslCaCertificateArnInput: string;
```

- *Type:* string

---

##### `sslClientCertificateArnInput`<sup>Optional</sup> <a name="sslClientCertificateArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput"></a>

```typescript
public readonly sslClientCertificateArnInput: string;
```

- *Type:* string

---

##### `sslClientKeyArnInput`<sup>Optional</sup> <a name="sslClientKeyArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput"></a>

```typescript
public readonly sslClientKeyArnInput: string;
```

- *Type:* string

---

##### `sslClientKeyPasswordInput`<sup>Optional</sup> <a name="sslClientKeyPasswordInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput"></a>

```typescript
public readonly sslClientKeyPasswordInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```typescript
public readonly broker: string;
```

- *Type:* string

---

##### `includeControlDetails`<sup>Required</sup> <a name="includeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```typescript
public readonly includeControlDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="includeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```typescript
public readonly includeNullAndEmpty: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includePartitionValue`<sup>Required</sup> <a name="includePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```typescript
public readonly includePartitionValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="includeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```typescript
public readonly includeTableAlterOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="includeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```typescript
public readonly includeTransactionDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

---

##### `messageMaxBytes`<sup>Required</sup> <a name="messageMaxBytes" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```typescript
public readonly messageMaxBytes: number;
```

- *Type:* number

---

##### `noHexPrefix`<sup>Required</sup> <a name="noHexPrefix" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```typescript
public readonly noHexPrefix: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="partitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```typescript
public readonly partitionIncludeSchemaTable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `saslPassword`<sup>Required</sup> <a name="saslPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```typescript
public readonly saslPassword: string;
```

- *Type:* string

---

##### `saslUsername`<sup>Required</sup> <a name="saslUsername" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsername"></a>

```typescript
public readonly saslUsername: string;
```

- *Type:* string

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```typescript
public readonly securityProtocol: string;
```

- *Type:* string

---

##### `sslCaCertificateArn`<sup>Required</sup> <a name="sslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```typescript
public readonly sslCaCertificateArn: string;
```

- *Type:* string

---

##### `sslClientCertificateArn`<sup>Required</sup> <a name="sslClientCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```typescript
public readonly sslClientCertificateArn: string;
```

- *Type:* string

---

##### `sslClientKeyArn`<sup>Required</sup> <a name="sslClientKeyArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```typescript
public readonly sslClientKeyArn: string;
```

- *Type:* string

---

##### `sslClientKeyPassword`<sup>Required</sup> <a name="sslClientKeyPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```typescript
public readonly sslClientKeyPassword: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsEndpointKafkaSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---


### DmsEndpointKinesisSettingsOutputReference <a name="DmsEndpointKinesisSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

new dmsEndpoint.DmsEndpointKinesisSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails">resetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty">resetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue">resetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations">resetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails">resetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable">resetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn">resetStreamArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeControlDetails` <a name="resetIncludeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails"></a>

```typescript
public resetIncludeControlDetails(): void
```

##### `resetIncludeNullAndEmpty` <a name="resetIncludeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```typescript
public resetIncludeNullAndEmpty(): void
```

##### `resetIncludePartitionValue` <a name="resetIncludePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue"></a>

```typescript
public resetIncludePartitionValue(): void
```

##### `resetIncludeTableAlterOperations` <a name="resetIncludeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```typescript
public resetIncludeTableAlterOperations(): void
```

##### `resetIncludeTransactionDetails` <a name="resetIncludeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails"></a>

```typescript
public resetIncludeTransactionDetails(): void
```

##### `resetMessageFormat` <a name="resetMessageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat"></a>

```typescript
public resetMessageFormat(): void
```

##### `resetPartitionIncludeSchemaTable` <a name="resetPartitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```typescript
public resetPartitionIncludeSchemaTable(): void
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn"></a>

```typescript
public resetServiceAccessRoleArn(): void
```

##### `resetStreamArn` <a name="resetStreamArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn"></a>

```typescript
public resetStreamArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput">includeControlDetailsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput">includeNullAndEmptyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput">includePartitionValueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput">includeTableAlterOperationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput">includeTransactionDetailsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput">partitionIncludeSchemaTableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">includeControlDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">includePartitionValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat">messageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeControlDetailsInput`<sup>Optional</sup> <a name="includeControlDetailsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput"></a>

```typescript
public readonly includeControlDetailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeNullAndEmptyInput`<sup>Optional</sup> <a name="includeNullAndEmptyInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```typescript
public readonly includeNullAndEmptyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includePartitionValueInput`<sup>Optional</sup> <a name="includePartitionValueInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput"></a>

```typescript
public readonly includePartitionValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTableAlterOperationsInput`<sup>Optional</sup> <a name="includeTableAlterOperationsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```typescript
public readonly includeTableAlterOperationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTransactionDetailsInput`<sup>Optional</sup> <a name="includeTransactionDetailsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```typescript
public readonly includeTransactionDetailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput"></a>

```typescript
public readonly messageFormatInput: string;
```

- *Type:* string

---

##### `partitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="partitionIncludeSchemaTableInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```typescript
public readonly partitionIncludeSchemaTableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```typescript
public readonly serviceAccessRoleArnInput: string;
```

- *Type:* string

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput"></a>

```typescript
public readonly streamArnInput: string;
```

- *Type:* string

---

##### `includeControlDetails`<sup>Required</sup> <a name="includeControlDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```typescript
public readonly includeControlDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="includeNullAndEmpty" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```typescript
public readonly includeNullAndEmpty: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includePartitionValue`<sup>Required</sup> <a name="includePartitionValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```typescript
public readonly includePartitionValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="includeTableAlterOperations" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```typescript
public readonly includeTableAlterOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="includeTransactionDetails" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```typescript
public readonly includeTransactionDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="partitionIncludeSchemaTable" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```typescript
public readonly partitionIncludeSchemaTable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsEndpointKinesisSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---


### DmsEndpointMongodbSettingsOutputReference <a name="DmsEndpointMongodbSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

new dmsEndpoint.DmsEndpointMongodbSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthMechanism">resetAuthMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthSource">resetAuthSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetDocsToInvestigate">resetDocsToInvestigate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetExtractDocId">resetExtractDocId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetNestingLevel">resetNestingLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthMechanism` <a name="resetAuthMechanism" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthMechanism"></a>

```typescript
public resetAuthMechanism(): void
```

##### `resetAuthSource` <a name="resetAuthSource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthSource"></a>

```typescript
public resetAuthSource(): void
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetDocsToInvestigate` <a name="resetDocsToInvestigate" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetDocsToInvestigate"></a>

```typescript
public resetDocsToInvestigate(): void
```

##### `resetExtractDocId` <a name="resetExtractDocId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetExtractDocId"></a>

```typescript
public resetExtractDocId(): void
```

##### `resetNestingLevel` <a name="resetNestingLevel" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetNestingLevel"></a>

```typescript
public resetNestingLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanismInput">authMechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSourceInput">authSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigateInput">docsToInvestigateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocIdInput">extractDocIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevelInput">nestingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanism">authMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSource">authSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate">docsToInvestigate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocId">extractDocId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevel">nestingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authMechanismInput`<sup>Optional</sup> <a name="authMechanismInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanismInput"></a>

```typescript
public readonly authMechanismInput: string;
```

- *Type:* string

---

##### `authSourceInput`<sup>Optional</sup> <a name="authSourceInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSourceInput"></a>

```typescript
public readonly authSourceInput: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `docsToInvestigateInput`<sup>Optional</sup> <a name="docsToInvestigateInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigateInput"></a>

```typescript
public readonly docsToInvestigateInput: string;
```

- *Type:* string

---

##### `extractDocIdInput`<sup>Optional</sup> <a name="extractDocIdInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocIdInput"></a>

```typescript
public readonly extractDocIdInput: string;
```

- *Type:* string

---

##### `nestingLevelInput`<sup>Optional</sup> <a name="nestingLevelInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevelInput"></a>

```typescript
public readonly nestingLevelInput: string;
```

- *Type:* string

---

##### `authMechanism`<sup>Required</sup> <a name="authMechanism" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanism"></a>

```typescript
public readonly authMechanism: string;
```

- *Type:* string

---

##### `authSource`<sup>Required</sup> <a name="authSource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSource"></a>

```typescript
public readonly authSource: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `docsToInvestigate`<sup>Required</sup> <a name="docsToInvestigate" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate"></a>

```typescript
public readonly docsToInvestigate: string;
```

- *Type:* string

---

##### `extractDocId`<sup>Required</sup> <a name="extractDocId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocId"></a>

```typescript
public readonly extractDocId: string;
```

- *Type:* string

---

##### `nestingLevel`<sup>Required</sup> <a name="nestingLevel" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevel"></a>

```typescript
public readonly nestingLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsEndpointMongodbSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---


### DmsEndpointRedisSettingsOutputReference <a name="DmsEndpointRedisSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

new dmsEndpoint.DmsEndpointRedisSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword">resetAuthPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName">resetAuthUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn">resetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol">resetSslSecurityProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthPassword` <a name="resetAuthPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword"></a>

```typescript
public resetAuthPassword(): void
```

##### `resetAuthUserName` <a name="resetAuthUserName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName"></a>

```typescript
public resetAuthUserName(): void
```

##### `resetSslCaCertificateArn` <a name="resetSslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn"></a>

```typescript
public resetSslCaCertificateArn(): void
```

##### `resetSslSecurityProtocol` <a name="resetSslSecurityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol"></a>

```typescript
public resetSslSecurityProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput">authPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput">authUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput">sslCaCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput">sslSecurityProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword">authPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName">authUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol">sslSecurityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authPasswordInput`<sup>Optional</sup> <a name="authPasswordInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput"></a>

```typescript
public readonly authPasswordInput: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `authUserNameInput`<sup>Optional</sup> <a name="authUserNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput"></a>

```typescript
public readonly authUserNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `sslCaCertificateArnInput`<sup>Optional</sup> <a name="sslCaCertificateArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```typescript
public readonly sslCaCertificateArnInput: string;
```

- *Type:* string

---

##### `sslSecurityProtocolInput`<sup>Optional</sup> <a name="sslSecurityProtocolInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput"></a>

```typescript
public readonly sslSecurityProtocolInput: string;
```

- *Type:* string

---

##### `authPassword`<sup>Required</sup> <a name="authPassword" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword"></a>

```typescript
public readonly authPassword: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `authUserName`<sup>Required</sup> <a name="authUserName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName"></a>

```typescript
public readonly authUserName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslCaCertificateArn`<sup>Required</sup> <a name="sslCaCertificateArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn"></a>

```typescript
public readonly sslCaCertificateArn: string;
```

- *Type:* string

---

##### `sslSecurityProtocol`<sup>Required</sup> <a name="sslSecurityProtocol" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol"></a>

```typescript
public readonly sslSecurityProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsEndpointRedisSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---


### DmsEndpointRedshiftSettingsOutputReference <a name="DmsEndpointRedshiftSettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

new dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder">resetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId">resetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketFolder` <a name="resetBucketFolder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder"></a>

```typescript
public resetBucketFolder(): void
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode"></a>

```typescript
public resetEncryptionMode(): void
```

##### `resetServerSideEncryptionKmsKeyId` <a name="resetServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```typescript
public resetServerSideEncryptionKmsKeyId(): void
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn"></a>

```typescript
public resetServiceAccessRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput">bucketFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput">encryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">serverSideEncryptionKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder">bucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketFolderInput`<sup>Optional</sup> <a name="bucketFolderInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput"></a>

```typescript
public readonly bucketFolderInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput"></a>

```typescript
public readonly encryptionModeInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyIdInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```typescript
public readonly serverSideEncryptionKmsKeyIdInput: string;
```

- *Type:* string

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```typescript
public readonly serviceAccessRoleArnInput: string;
```

- *Type:* string

---

##### `bucketFolder`<sup>Required</sup> <a name="bucketFolder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder"></a>

```typescript
public readonly bucketFolder: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```typescript
public readonly serverSideEncryptionKmsKeyId: string;
```

- *Type:* string

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsEndpointRedshiftSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---


### DmsEndpointS3SettingsOutputReference <a name="DmsEndpointS3SettingsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

new dmsEndpoint.DmsEndpointS3SettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddColumnName">resetAddColumnName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketFolder">resetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCannedAclForObjects">resetCannedAclForObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsAndUpdates">resetCdcInsertsAndUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsOnly">resetCdcInsertsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMaxBatchInterval">resetCdcMaxBatchInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMinFileSize">resetCdcMinFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcPath">resetCdcPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCompressionType">resetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvDelimiter">resetCsvDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNoSupValue">resetCsvNoSupValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNullValue">resetCsvNullValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvRowDelimiter">resetCsvRowDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataFormat">resetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataPageSize">resetDataPageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionDelimiter">resetDatePartitionDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionEnabled">resetDatePartitionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionSequence">resetDatePartitionSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDictPageSizeLimit">resetDictPageSizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEnableStatistics">resetEnableStatistics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncodingType">resetEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExternalTableDefinition">resetExternalTableDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeaderRows">resetIgnoreHeaderRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeadersRow">resetIgnoreHeadersRow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIncludeOpForFullLoad">resetIncludeOpForFullLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetTimestampInMillisecond">resetParquetTimestampInMillisecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetVersion">resetParquetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetPreserveTransactions">resetPreserveTransactions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRfc4180">resetRfc4180</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRowGroupLength">resetRowGroupLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServerSideEncryptionKmsKeyId">resetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetTimestampColumnName">resetTimestampColumnName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseCsvNoSupValue">resetUseCsvNoSupValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseTaskStartTimeForFullLoadTimestamp">resetUseTaskStartTimeForFullLoadTimestamp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddColumnName` <a name="resetAddColumnName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddColumnName"></a>

```typescript
public resetAddColumnName(): void
```

##### `resetBucketFolder` <a name="resetBucketFolder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketFolder"></a>

```typescript
public resetBucketFolder(): void
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetCannedAclForObjects` <a name="resetCannedAclForObjects" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCannedAclForObjects"></a>

```typescript
public resetCannedAclForObjects(): void
```

##### `resetCdcInsertsAndUpdates` <a name="resetCdcInsertsAndUpdates" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsAndUpdates"></a>

```typescript
public resetCdcInsertsAndUpdates(): void
```

##### `resetCdcInsertsOnly` <a name="resetCdcInsertsOnly" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsOnly"></a>

```typescript
public resetCdcInsertsOnly(): void
```

##### `resetCdcMaxBatchInterval` <a name="resetCdcMaxBatchInterval" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMaxBatchInterval"></a>

```typescript
public resetCdcMaxBatchInterval(): void
```

##### `resetCdcMinFileSize` <a name="resetCdcMinFileSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMinFileSize"></a>

```typescript
public resetCdcMinFileSize(): void
```

##### `resetCdcPath` <a name="resetCdcPath" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcPath"></a>

```typescript
public resetCdcPath(): void
```

##### `resetCompressionType` <a name="resetCompressionType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCompressionType"></a>

```typescript
public resetCompressionType(): void
```

##### `resetCsvDelimiter` <a name="resetCsvDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvDelimiter"></a>

```typescript
public resetCsvDelimiter(): void
```

##### `resetCsvNoSupValue` <a name="resetCsvNoSupValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNoSupValue"></a>

```typescript
public resetCsvNoSupValue(): void
```

##### `resetCsvNullValue` <a name="resetCsvNullValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNullValue"></a>

```typescript
public resetCsvNullValue(): void
```

##### `resetCsvRowDelimiter` <a name="resetCsvRowDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvRowDelimiter"></a>

```typescript
public resetCsvRowDelimiter(): void
```

##### `resetDataFormat` <a name="resetDataFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataFormat"></a>

```typescript
public resetDataFormat(): void
```

##### `resetDataPageSize` <a name="resetDataPageSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataPageSize"></a>

```typescript
public resetDataPageSize(): void
```

##### `resetDatePartitionDelimiter` <a name="resetDatePartitionDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionDelimiter"></a>

```typescript
public resetDatePartitionDelimiter(): void
```

##### `resetDatePartitionEnabled` <a name="resetDatePartitionEnabled" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionEnabled"></a>

```typescript
public resetDatePartitionEnabled(): void
```

##### `resetDatePartitionSequence` <a name="resetDatePartitionSequence" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionSequence"></a>

```typescript
public resetDatePartitionSequence(): void
```

##### `resetDictPageSizeLimit` <a name="resetDictPageSizeLimit" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDictPageSizeLimit"></a>

```typescript
public resetDictPageSizeLimit(): void
```

##### `resetEnableStatistics` <a name="resetEnableStatistics" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEnableStatistics"></a>

```typescript
public resetEnableStatistics(): void
```

##### `resetEncodingType` <a name="resetEncodingType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncodingType"></a>

```typescript
public resetEncodingType(): void
```

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncryptionMode"></a>

```typescript
public resetEncryptionMode(): void
```

##### `resetExternalTableDefinition` <a name="resetExternalTableDefinition" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExternalTableDefinition"></a>

```typescript
public resetExternalTableDefinition(): void
```

##### `resetIgnoreHeaderRows` <a name="resetIgnoreHeaderRows" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeaderRows"></a>

```typescript
public resetIgnoreHeaderRows(): void
```

##### `resetIgnoreHeadersRow` <a name="resetIgnoreHeadersRow" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeadersRow"></a>

```typescript
public resetIgnoreHeadersRow(): void
```

##### `resetIncludeOpForFullLoad` <a name="resetIncludeOpForFullLoad" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIncludeOpForFullLoad"></a>

```typescript
public resetIncludeOpForFullLoad(): void
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetMaxFileSize"></a>

```typescript
public resetMaxFileSize(): void
```

##### `resetParquetTimestampInMillisecond` <a name="resetParquetTimestampInMillisecond" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetTimestampInMillisecond"></a>

```typescript
public resetParquetTimestampInMillisecond(): void
```

##### `resetParquetVersion` <a name="resetParquetVersion" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetVersion"></a>

```typescript
public resetParquetVersion(): void
```

##### `resetPreserveTransactions` <a name="resetPreserveTransactions" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetPreserveTransactions"></a>

```typescript
public resetPreserveTransactions(): void
```

##### `resetRfc4180` <a name="resetRfc4180" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRfc4180"></a>

```typescript
public resetRfc4180(): void
```

##### `resetRowGroupLength` <a name="resetRowGroupLength" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRowGroupLength"></a>

```typescript
public resetRowGroupLength(): void
```

##### `resetServerSideEncryptionKmsKeyId` <a name="resetServerSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```typescript
public resetServerSideEncryptionKmsKeyId(): void
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServiceAccessRoleArn"></a>

```typescript
public resetServiceAccessRoleArn(): void
```

##### `resetTimestampColumnName` <a name="resetTimestampColumnName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetTimestampColumnName"></a>

```typescript
public resetTimestampColumnName(): void
```

##### `resetUseCsvNoSupValue` <a name="resetUseCsvNoSupValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseCsvNoSupValue"></a>

```typescript
public resetUseCsvNoSupValue(): void
```

##### `resetUseTaskStartTimeForFullLoadTimestamp` <a name="resetUseTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseTaskStartTimeForFullLoadTimestamp"></a>

```typescript
public resetUseTaskStartTimeForFullLoadTimestamp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnNameInput">addColumnNameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolderInput">bucketFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjectsInput">cannedAclForObjectsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdatesInput">cdcInsertsAndUpdatesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnlyInput">cdcInsertsOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchIntervalInput">cdcMaxBatchIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSizeInput">cdcMinFileSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPathInput">cdcPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionTypeInput">compressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiterInput">csvDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValueInput">csvNoSupValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValueInput">csvNullValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiterInput">csvRowDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormatInput">dataFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSizeInput">dataPageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiterInput">datePartitionDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabledInput">datePartitionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequenceInput">datePartitionSequenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimitInput">dictPageSizeLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatisticsInput">enableStatisticsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingTypeInput">encodingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionModeInput">encryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinitionInput">externalTableDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRowsInput">ignoreHeaderRowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeadersRowInput">ignoreHeadersRowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoadInput">includeOpForFullLoadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecondInput">parquetTimestampInMillisecondInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersionInput">parquetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactionsInput">preserveTransactionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180Input">rfc4180Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLengthInput">rowGroupLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">serverSideEncryptionKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnNameInput">timestampColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValueInput">useCsvNoSupValueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestampInput">useTaskStartTimeForFullLoadTimestampInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnName">addColumnName</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolder">bucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjects">cannedAclForObjects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates">cdcInsertsAndUpdates</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly">cdcInsertsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval">cdcMaxBatchInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSize">cdcMinFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPath">cdcPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionType">compressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiter">csvDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValue">csvNoSupValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValue">csvNullValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiter">csvRowDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormat">dataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSize">dataPageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter">datePartitionDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabled">datePartitionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequence">datePartitionSequence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit">dictPageSizeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatistics">enableStatistics</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingType">encodingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinition">externalTableDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows">ignoreHeaderRows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeadersRow">ignoreHeadersRow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad">includeOpForFullLoad</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond">parquetTimestampInMillisecond</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersion">parquetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactions">preserveTransactions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180">rfc4180</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLength">rowGroupLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnName">timestampColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue">useCsvNoSupValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp">useTaskStartTimeForFullLoadTimestamp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addColumnNameInput`<sup>Optional</sup> <a name="addColumnNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnNameInput"></a>

```typescript
public readonly addColumnNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bucketFolderInput`<sup>Optional</sup> <a name="bucketFolderInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolderInput"></a>

```typescript
public readonly bucketFolderInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `cannedAclForObjectsInput`<sup>Optional</sup> <a name="cannedAclForObjectsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjectsInput"></a>

```typescript
public readonly cannedAclForObjectsInput: string;
```

- *Type:* string

---

##### `cdcInsertsAndUpdatesInput`<sup>Optional</sup> <a name="cdcInsertsAndUpdatesInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdatesInput"></a>

```typescript
public readonly cdcInsertsAndUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cdcInsertsOnlyInput`<sup>Optional</sup> <a name="cdcInsertsOnlyInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnlyInput"></a>

```typescript
public readonly cdcInsertsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cdcMaxBatchIntervalInput`<sup>Optional</sup> <a name="cdcMaxBatchIntervalInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchIntervalInput"></a>

```typescript
public readonly cdcMaxBatchIntervalInput: number;
```

- *Type:* number

---

##### `cdcMinFileSizeInput`<sup>Optional</sup> <a name="cdcMinFileSizeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSizeInput"></a>

```typescript
public readonly cdcMinFileSizeInput: number;
```

- *Type:* number

---

##### `cdcPathInput`<sup>Optional</sup> <a name="cdcPathInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPathInput"></a>

```typescript
public readonly cdcPathInput: string;
```

- *Type:* string

---

##### `compressionTypeInput`<sup>Optional</sup> <a name="compressionTypeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionTypeInput"></a>

```typescript
public readonly compressionTypeInput: string;
```

- *Type:* string

---

##### `csvDelimiterInput`<sup>Optional</sup> <a name="csvDelimiterInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiterInput"></a>

```typescript
public readonly csvDelimiterInput: string;
```

- *Type:* string

---

##### `csvNoSupValueInput`<sup>Optional</sup> <a name="csvNoSupValueInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValueInput"></a>

```typescript
public readonly csvNoSupValueInput: string;
```

- *Type:* string

---

##### `csvNullValueInput`<sup>Optional</sup> <a name="csvNullValueInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValueInput"></a>

```typescript
public readonly csvNullValueInput: string;
```

- *Type:* string

---

##### `csvRowDelimiterInput`<sup>Optional</sup> <a name="csvRowDelimiterInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiterInput"></a>

```typescript
public readonly csvRowDelimiterInput: string;
```

- *Type:* string

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormatInput"></a>

```typescript
public readonly dataFormatInput: string;
```

- *Type:* string

---

##### `dataPageSizeInput`<sup>Optional</sup> <a name="dataPageSizeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSizeInput"></a>

```typescript
public readonly dataPageSizeInput: number;
```

- *Type:* number

---

##### `datePartitionDelimiterInput`<sup>Optional</sup> <a name="datePartitionDelimiterInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiterInput"></a>

```typescript
public readonly datePartitionDelimiterInput: string;
```

- *Type:* string

---

##### `datePartitionEnabledInput`<sup>Optional</sup> <a name="datePartitionEnabledInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabledInput"></a>

```typescript
public readonly datePartitionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datePartitionSequenceInput`<sup>Optional</sup> <a name="datePartitionSequenceInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequenceInput"></a>

```typescript
public readonly datePartitionSequenceInput: string;
```

- *Type:* string

---

##### `dictPageSizeLimitInput`<sup>Optional</sup> <a name="dictPageSizeLimitInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimitInput"></a>

```typescript
public readonly dictPageSizeLimitInput: number;
```

- *Type:* number

---

##### `enableStatisticsInput`<sup>Optional</sup> <a name="enableStatisticsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatisticsInput"></a>

```typescript
public readonly enableStatisticsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encodingTypeInput`<sup>Optional</sup> <a name="encodingTypeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingTypeInput"></a>

```typescript
public readonly encodingTypeInput: string;
```

- *Type:* string

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionModeInput"></a>

```typescript
public readonly encryptionModeInput: string;
```

- *Type:* string

---

##### `externalTableDefinitionInput`<sup>Optional</sup> <a name="externalTableDefinitionInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinitionInput"></a>

```typescript
public readonly externalTableDefinitionInput: string;
```

- *Type:* string

---

##### `ignoreHeaderRowsInput`<sup>Optional</sup> <a name="ignoreHeaderRowsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRowsInput"></a>

```typescript
public readonly ignoreHeaderRowsInput: number;
```

- *Type:* number

---

##### `ignoreHeadersRowInput`<sup>Optional</sup> <a name="ignoreHeadersRowInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeadersRowInput"></a>

```typescript
public readonly ignoreHeadersRowInput: number;
```

- *Type:* number

---

##### `includeOpForFullLoadInput`<sup>Optional</sup> <a name="includeOpForFullLoadInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoadInput"></a>

```typescript
public readonly includeOpForFullLoadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSizeInput"></a>

```typescript
public readonly maxFileSizeInput: number;
```

- *Type:* number

---

##### `parquetTimestampInMillisecondInput`<sup>Optional</sup> <a name="parquetTimestampInMillisecondInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecondInput"></a>

```typescript
public readonly parquetTimestampInMillisecondInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `parquetVersionInput`<sup>Optional</sup> <a name="parquetVersionInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersionInput"></a>

```typescript
public readonly parquetVersionInput: string;
```

- *Type:* string

---

##### `preserveTransactionsInput`<sup>Optional</sup> <a name="preserveTransactionsInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactionsInput"></a>

```typescript
public readonly preserveTransactionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rfc4180Input`<sup>Optional</sup> <a name="rfc4180Input" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180Input"></a>

```typescript
public readonly rfc4180Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rowGroupLengthInput`<sup>Optional</sup> <a name="rowGroupLengthInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLengthInput"></a>

```typescript
public readonly rowGroupLengthInput: number;
```

- *Type:* number

---

##### `serverSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyIdInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```typescript
public readonly serverSideEncryptionKmsKeyIdInput: string;
```

- *Type:* string

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```typescript
public readonly serviceAccessRoleArnInput: string;
```

- *Type:* string

---

##### `timestampColumnNameInput`<sup>Optional</sup> <a name="timestampColumnNameInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnNameInput"></a>

```typescript
public readonly timestampColumnNameInput: string;
```

- *Type:* string

---

##### `useCsvNoSupValueInput`<sup>Optional</sup> <a name="useCsvNoSupValueInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValueInput"></a>

```typescript
public readonly useCsvNoSupValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useTaskStartTimeForFullLoadTimestampInput`<sup>Optional</sup> <a name="useTaskStartTimeForFullLoadTimestampInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestampInput"></a>

```typescript
public readonly useTaskStartTimeForFullLoadTimestampInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `addColumnName`<sup>Required</sup> <a name="addColumnName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnName"></a>

```typescript
public readonly addColumnName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bucketFolder`<sup>Required</sup> <a name="bucketFolder" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolder"></a>

```typescript
public readonly bucketFolder: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `cannedAclForObjects`<sup>Required</sup> <a name="cannedAclForObjects" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjects"></a>

```typescript
public readonly cannedAclForObjects: string;
```

- *Type:* string

---

##### `cdcInsertsAndUpdates`<sup>Required</sup> <a name="cdcInsertsAndUpdates" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates"></a>

```typescript
public readonly cdcInsertsAndUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cdcInsertsOnly`<sup>Required</sup> <a name="cdcInsertsOnly" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly"></a>

```typescript
public readonly cdcInsertsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cdcMaxBatchInterval`<sup>Required</sup> <a name="cdcMaxBatchInterval" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval"></a>

```typescript
public readonly cdcMaxBatchInterval: number;
```

- *Type:* number

---

##### `cdcMinFileSize`<sup>Required</sup> <a name="cdcMinFileSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSize"></a>

```typescript
public readonly cdcMinFileSize: number;
```

- *Type:* number

---

##### `cdcPath`<sup>Required</sup> <a name="cdcPath" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPath"></a>

```typescript
public readonly cdcPath: string;
```

- *Type:* string

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

---

##### `csvDelimiter`<sup>Required</sup> <a name="csvDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiter"></a>

```typescript
public readonly csvDelimiter: string;
```

- *Type:* string

---

##### `csvNoSupValue`<sup>Required</sup> <a name="csvNoSupValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValue"></a>

```typescript
public readonly csvNoSupValue: string;
```

- *Type:* string

---

##### `csvNullValue`<sup>Required</sup> <a name="csvNullValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValue"></a>

```typescript
public readonly csvNullValue: string;
```

- *Type:* string

---

##### `csvRowDelimiter`<sup>Required</sup> <a name="csvRowDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiter"></a>

```typescript
public readonly csvRowDelimiter: string;
```

- *Type:* string

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

---

##### `dataPageSize`<sup>Required</sup> <a name="dataPageSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSize"></a>

```typescript
public readonly dataPageSize: number;
```

- *Type:* number

---

##### `datePartitionDelimiter`<sup>Required</sup> <a name="datePartitionDelimiter" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter"></a>

```typescript
public readonly datePartitionDelimiter: string;
```

- *Type:* string

---

##### `datePartitionEnabled`<sup>Required</sup> <a name="datePartitionEnabled" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabled"></a>

```typescript
public readonly datePartitionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datePartitionSequence`<sup>Required</sup> <a name="datePartitionSequence" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequence"></a>

```typescript
public readonly datePartitionSequence: string;
```

- *Type:* string

---

##### `dictPageSizeLimit`<sup>Required</sup> <a name="dictPageSizeLimit" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit"></a>

```typescript
public readonly dictPageSizeLimit: number;
```

- *Type:* number

---

##### `enableStatistics`<sup>Required</sup> <a name="enableStatistics" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatistics"></a>

```typescript
public readonly enableStatistics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encodingType`<sup>Required</sup> <a name="encodingType" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingType"></a>

```typescript
public readonly encodingType: string;
```

- *Type:* string

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

---

##### `externalTableDefinition`<sup>Required</sup> <a name="externalTableDefinition" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinition"></a>

```typescript
public readonly externalTableDefinition: string;
```

- *Type:* string

---

##### `ignoreHeaderRows`<sup>Required</sup> <a name="ignoreHeaderRows" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows"></a>

```typescript
public readonly ignoreHeaderRows: number;
```

- *Type:* number

---

##### `ignoreHeadersRow`<sup>Required</sup> <a name="ignoreHeadersRow" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeadersRow"></a>

```typescript
public readonly ignoreHeadersRow: number;
```

- *Type:* number

---

##### `includeOpForFullLoad`<sup>Required</sup> <a name="includeOpForFullLoad" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad"></a>

```typescript
public readonly includeOpForFullLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

---

##### `parquetTimestampInMillisecond`<sup>Required</sup> <a name="parquetTimestampInMillisecond" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond"></a>

```typescript
public readonly parquetTimestampInMillisecond: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `parquetVersion`<sup>Required</sup> <a name="parquetVersion" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersion"></a>

```typescript
public readonly parquetVersion: string;
```

- *Type:* string

---

##### `preserveTransactions`<sup>Required</sup> <a name="preserveTransactions" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactions"></a>

```typescript
public readonly preserveTransactions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rfc4180`<sup>Required</sup> <a name="rfc4180" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180"></a>

```typescript
public readonly rfc4180: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rowGroupLength`<sup>Required</sup> <a name="rowGroupLength" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLength"></a>

```typescript
public readonly rowGroupLength: number;
```

- *Type:* number

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```typescript
public readonly serverSideEncryptionKmsKeyId: string;
```

- *Type:* string

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

---

##### `timestampColumnName`<sup>Required</sup> <a name="timestampColumnName" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnName"></a>

```typescript
public readonly timestampColumnName: string;
```

- *Type:* string

---

##### `useCsvNoSupValue`<sup>Required</sup> <a name="useCsvNoSupValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue"></a>

```typescript
public readonly useCsvNoSupValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useTaskStartTimeForFullLoadTimestamp`<sup>Required</sup> <a name="useTaskStartTimeForFullLoadTimestamp" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp"></a>

```typescript
public readonly useTaskStartTimeForFullLoadTimestamp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsEndpointS3Settings;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---


### DmsEndpointTimeoutsOutputReference <a name="DmsEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/provider-aws'

new dmsEndpoint.DmsEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsEndpointTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.dmsEndpoint.DmsEndpointTimeouts">DmsEndpointTimeouts</a> | cdktf.IResolvable

---



