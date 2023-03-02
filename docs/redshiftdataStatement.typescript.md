# `redshiftdataStatement` Submodule <a name="`redshiftdataStatement` Submodule" id="@cdktf/provider-aws.redshiftdataStatement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftdataStatement <a name="RedshiftdataStatement" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement aws_redshiftdata_statement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer"></a>

```typescript
import { redshiftdataStatement } from '@cdktf/provider-aws'

new redshiftdataStatement.RedshiftdataStatement(scope: Construct, id: string, config: RedshiftdataStatementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig">RedshiftdataStatementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig">RedshiftdataStatementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetClusterIdentifier">resetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetDbUser">resetDbUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetSecretArn">resetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetStatementName">resetStatementName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetWithEvent">resetWithEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetWorkgroupName">resetWorkgroupName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putParameters` <a name="putParameters" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.putParameters"></a>

```typescript
public putParameters(value: IResolvable | RedshiftdataStatementParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.putParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.putTimeouts"></a>

```typescript
public putTimeouts(value: RedshiftdataStatementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a>

---

##### `resetClusterIdentifier` <a name="resetClusterIdentifier" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetClusterIdentifier"></a>

```typescript
public resetClusterIdentifier(): void
```

##### `resetDbUser` <a name="resetDbUser" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetDbUser"></a>

```typescript
public resetDbUser(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```

##### `resetStatementName` <a name="resetStatementName" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetStatementName"></a>

```typescript
public resetStatementName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWithEvent` <a name="resetWithEvent" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetWithEvent"></a>

```typescript
public resetWithEvent(): void
```

##### `resetWorkgroupName` <a name="resetWorkgroupName" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.resetWorkgroupName"></a>

```typescript
public resetWorkgroupName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isConstruct"></a>

```typescript
import { redshiftdataStatement } from '@cdktf/provider-aws'

redshiftdataStatement.RedshiftdataStatement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformElement"></a>

```typescript
import { redshiftdataStatement } from '@cdktf/provider-aws'

redshiftdataStatement.RedshiftdataStatement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformResource"></a>

```typescript
import { redshiftdataStatement } from '@cdktf/provider-aws'

redshiftdataStatement.RedshiftdataStatement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList">RedshiftdataStatementParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference">RedshiftdataStatementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dbUserInput">dbUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.parametersInput">parametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.statementNameInput">statementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.withEventInput">withEventInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.workgroupNameInput">workgroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dbUser">dbUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.statementName">statementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.withEvent">withEvent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.workgroupName">workgroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.parameters"></a>

```typescript
public readonly parameters: RedshiftdataStatementParametersList;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList">RedshiftdataStatementParametersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.timeouts"></a>

```typescript
public readonly timeouts: RedshiftdataStatementTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference">RedshiftdataStatementTimeoutsOutputReference</a>

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `dbUserInput`<sup>Optional</sup> <a name="dbUserInput" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dbUserInput"></a>

```typescript
public readonly dbUserInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | RedshiftdataStatementParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>[]

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `statementNameInput`<sup>Optional</sup> <a name="statementNameInput" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.statementNameInput"></a>

```typescript
public readonly statementNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: RedshiftdataStatementTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a> | cdktf.IResolvable

---

##### `withEventInput`<sup>Optional</sup> <a name="withEventInput" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.withEventInput"></a>

```typescript
public readonly withEventInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workgroupNameInput`<sup>Optional</sup> <a name="workgroupNameInput" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.workgroupNameInput"></a>

```typescript
public readonly workgroupNameInput: string;
```

- *Type:* string

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `dbUser`<sup>Required</sup> <a name="dbUser" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.dbUser"></a>

```typescript
public readonly dbUser: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `statementName`<sup>Required</sup> <a name="statementName" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.statementName"></a>

```typescript
public readonly statementName: string;
```

- *Type:* string

---

##### `withEvent`<sup>Required</sup> <a name="withEvent" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.withEvent"></a>

```typescript
public readonly withEvent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.workgroupName"></a>

```typescript
public readonly workgroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftdataStatementConfig <a name="RedshiftdataStatementConfig" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.Initializer"></a>

```typescript
import { redshiftdataStatement } from '@cdktf/provider-aws'

const redshiftdataStatementConfig: redshiftdataStatement.RedshiftdataStatementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.database">database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#database RedshiftdataStatement#database}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#sql RedshiftdataStatement#sql}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#cluster_identifier RedshiftdataStatement#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.dbUser">dbUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#db_user RedshiftdataStatement#db_user}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#id RedshiftdataStatement#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.parameters">parameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>[]</code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.secretArn">secretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#secret_arn RedshiftdataStatement#secret_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.statementName">statementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#statement_name RedshiftdataStatement#statement_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.withEvent">withEvent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#with_event RedshiftdataStatement#with_event}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.workgroupName">workgroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#workgroup_name RedshiftdataStatement#workgroup_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#database RedshiftdataStatement#database}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#sql RedshiftdataStatement#sql}.

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#cluster_identifier RedshiftdataStatement#cluster_identifier}.

---

##### `dbUser`<sup>Optional</sup> <a name="dbUser" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.dbUser"></a>

```typescript
public readonly dbUser: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#db_user RedshiftdataStatement#db_user}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#id RedshiftdataStatement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | RedshiftdataStatementParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#parameters RedshiftdataStatement#parameters}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#secret_arn RedshiftdataStatement#secret_arn}.

---

##### `statementName`<sup>Optional</sup> <a name="statementName" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.statementName"></a>

```typescript
public readonly statementName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#statement_name RedshiftdataStatement#statement_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RedshiftdataStatementTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#timeouts RedshiftdataStatement#timeouts}

---

##### `withEvent`<sup>Optional</sup> <a name="withEvent" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.withEvent"></a>

```typescript
public readonly withEvent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#with_event RedshiftdataStatement#with_event}.

---

##### `workgroupName`<sup>Optional</sup> <a name="workgroupName" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementConfig.property.workgroupName"></a>

```typescript
public readonly workgroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#workgroup_name RedshiftdataStatement#workgroup_name}.

---

### RedshiftdataStatementParameters <a name="RedshiftdataStatementParameters" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters.Initializer"></a>

```typescript
import { redshiftdataStatement } from '@cdktf/provider-aws'

const redshiftdataStatementParameters: redshiftdataStatement.RedshiftdataStatementParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#name RedshiftdataStatement#name}. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#value RedshiftdataStatement#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#name RedshiftdataStatement#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#value RedshiftdataStatement#value}.

---

### RedshiftdataStatementTimeouts <a name="RedshiftdataStatementTimeouts" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts.Initializer"></a>

```typescript
import { redshiftdataStatement } from '@cdktf/provider-aws'

const redshiftdataStatementTimeouts: redshiftdataStatement.RedshiftdataStatementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#create RedshiftdataStatement#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftdata_statement#create RedshiftdataStatement#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftdataStatementParametersList <a name="RedshiftdataStatementParametersList" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer"></a>

```typescript
import { redshiftdataStatement } from '@cdktf/provider-aws'

new redshiftdataStatement.RedshiftdataStatementParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.get"></a>

```typescript
public get(index: number): RedshiftdataStatementParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftdataStatementParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a>[]

---


### RedshiftdataStatementParametersOutputReference <a name="RedshiftdataStatementParametersOutputReference" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer"></a>

```typescript
import { redshiftdataStatement } from '@cdktf/provider-aws'

new redshiftdataStatement.RedshiftdataStatementParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedshiftdataStatementParameters | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementParameters">RedshiftdataStatementParameters</a> | cdktf.IResolvable

---


### RedshiftdataStatementTimeoutsOutputReference <a name="RedshiftdataStatementTimeoutsOutputReference" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.Initializer"></a>

```typescript
import { redshiftdataStatement } from '@cdktf/provider-aws'

new redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedshiftdataStatementTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftdataStatement.RedshiftdataStatementTimeouts">RedshiftdataStatementTimeouts</a> | cdktf.IResolvable

---



