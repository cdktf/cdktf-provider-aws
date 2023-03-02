# `dataAwsRedshiftClusterCredentials` Submodule <a name="`dataAwsRedshiftClusterCredentials` Submodule" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftClusterCredentials <a name="DataAwsRedshiftClusterCredentials" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials aws_redshift_cluster_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer"></a>

```typescript
import { dataAwsRedshiftClusterCredentials } from '@cdktf/provider-aws'

new dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials(scope: Construct, id: string, config: DataAwsRedshiftClusterCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig">DataAwsRedshiftClusterCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig">DataAwsRedshiftClusterCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetAutoCreate">resetAutoCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDbGroups">resetDbGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDurationSeconds">resetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAutoCreate` <a name="resetAutoCreate" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetAutoCreate"></a>

```typescript
public resetAutoCreate(): void
```

##### `resetDbGroups` <a name="resetDbGroups" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDbGroups"></a>

```typescript
public resetDbGroups(): void
```

##### `resetDbName` <a name="resetDbName" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDbName"></a>

```typescript
public resetDbName(): void
```

##### `resetDurationSeconds` <a name="resetDurationSeconds" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetDurationSeconds"></a>

```typescript
public resetDurationSeconds(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isConstruct"></a>

```typescript
import { dataAwsRedshiftClusterCredentials } from '@cdktf/provider-aws'

dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformElement"></a>

```typescript
import { dataAwsRedshiftClusterCredentials } from '@cdktf/provider-aws'

dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformDataSource"></a>

```typescript
import { dataAwsRedshiftClusterCredentials } from '@cdktf/provider-aws'

dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbPassword">dbPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.autoCreateInput">autoCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbGroupsInput">dbGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbNameInput">dbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbUserInput">dbUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.durationSecondsInput">durationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.autoCreate">autoCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbGroups">dbGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbUser">dbUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dbPassword`<sup>Required</sup> <a name="dbPassword" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbPassword"></a>

```typescript
public readonly dbPassword: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `autoCreateInput`<sup>Optional</sup> <a name="autoCreateInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.autoCreateInput"></a>

```typescript
public readonly autoCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `dbGroupsInput`<sup>Optional</sup> <a name="dbGroupsInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbGroupsInput"></a>

```typescript
public readonly dbGroupsInput: string[];
```

- *Type:* string[]

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbNameInput"></a>

```typescript
public readonly dbNameInput: string;
```

- *Type:* string

---

##### `dbUserInput`<sup>Optional</sup> <a name="dbUserInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbUserInput"></a>

```typescript
public readonly dbUserInput: string;
```

- *Type:* string

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.durationSecondsInput"></a>

```typescript
public readonly durationSecondsInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `autoCreate`<sup>Required</sup> <a name="autoCreate" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.autoCreate"></a>

```typescript
public readonly autoCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `dbGroups`<sup>Required</sup> <a name="dbGroups" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbGroups"></a>

```typescript
public readonly dbGroups: string[];
```

- *Type:* string[]

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `dbUser`<sup>Required</sup> <a name="dbUser" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.dbUser"></a>

```typescript
public readonly dbUser: string;
```

- *Type:* string

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftClusterCredentialsConfig <a name="DataAwsRedshiftClusterCredentialsConfig" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.Initializer"></a>

```typescript
import { dataAwsRedshiftClusterCredentials } from '@cdktf/provider-aws'

const dataAwsRedshiftClusterCredentialsConfig: dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#cluster_identifier DataAwsRedshiftClusterCredentials#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbUser">dbUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_user DataAwsRedshiftClusterCredentials#db_user}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.autoCreate">autoCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#auto_create DataAwsRedshiftClusterCredentials#auto_create}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbGroups">dbGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_groups DataAwsRedshiftClusterCredentials#db_groups}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbName">dbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_name DataAwsRedshiftClusterCredentials#db_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#duration_seconds DataAwsRedshiftClusterCredentials#duration_seconds}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#id DataAwsRedshiftClusterCredentials#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#cluster_identifier DataAwsRedshiftClusterCredentials#cluster_identifier}.

---

##### `dbUser`<sup>Required</sup> <a name="dbUser" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbUser"></a>

```typescript
public readonly dbUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_user DataAwsRedshiftClusterCredentials#db_user}.

---

##### `autoCreate`<sup>Optional</sup> <a name="autoCreate" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.autoCreate"></a>

```typescript
public readonly autoCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#auto_create DataAwsRedshiftClusterCredentials#auto_create}.

---

##### `dbGroups`<sup>Optional</sup> <a name="dbGroups" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbGroups"></a>

```typescript
public readonly dbGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_groups DataAwsRedshiftClusterCredentials#db_groups}.

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#db_name DataAwsRedshiftClusterCredentials#db_name}.

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#duration_seconds DataAwsRedshiftClusterCredentials#duration_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftClusterCredentials.DataAwsRedshiftClusterCredentialsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster_credentials#id DataAwsRedshiftClusterCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



