# `redshiftUsageLimit` Submodule <a name="`redshiftUsageLimit` Submodule" id="@cdktf/provider-aws.redshiftUsageLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftUsageLimit <a name="RedshiftUsageLimit" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit aws_redshift_usage_limit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer"></a>

```typescript
import { redshiftUsageLimit } from '@cdktf/provider-aws'

new redshiftUsageLimit.RedshiftUsageLimit(scope: Construct, id: string, config: RedshiftUsageLimitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig">RedshiftUsageLimitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig">RedshiftUsageLimitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetBreachAction">resetBreachAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBreachAction` <a name="resetBreachAction" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetBreachAction"></a>

```typescript
public resetBreachAction(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isConstruct"></a>

```typescript
import { redshiftUsageLimit } from '@cdktf/provider-aws'

redshiftUsageLimit.RedshiftUsageLimit.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformElement"></a>

```typescript
import { redshiftUsageLimit } from '@cdktf/provider-aws'

redshiftUsageLimit.RedshiftUsageLimit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformResource"></a>

```typescript
import { redshiftUsageLimit } from '@cdktf/provider-aws'

redshiftUsageLimit.RedshiftUsageLimit.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.amountInput">amountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.breachActionInput">breachActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.featureTypeInput">featureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.limitTypeInput">limitTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.amount">amount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.breachAction">breachAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.featureType">featureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.limitType">limitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.amountInput"></a>

```typescript
public readonly amountInput: number;
```

- *Type:* number

---

##### `breachActionInput`<sup>Optional</sup> <a name="breachActionInput" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.breachActionInput"></a>

```typescript
public readonly breachActionInput: string;
```

- *Type:* string

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `featureTypeInput`<sup>Optional</sup> <a name="featureTypeInput" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.featureTypeInput"></a>

```typescript
public readonly featureTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitTypeInput`<sup>Optional</sup> <a name="limitTypeInput" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.limitTypeInput"></a>

```typescript
public readonly limitTypeInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

---

##### `breachAction`<sup>Required</sup> <a name="breachAction" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.breachAction"></a>

```typescript
public readonly breachAction: string;
```

- *Type:* string

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.featureType"></a>

```typescript
public readonly featureType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.limitType"></a>

```typescript
public readonly limitType: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftUsageLimitConfig <a name="RedshiftUsageLimitConfig" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.Initializer"></a>

```typescript
import { redshiftUsageLimit } from '@cdktf/provider-aws'

const redshiftUsageLimitConfig: redshiftUsageLimit.RedshiftUsageLimitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.amount">amount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#amount RedshiftUsageLimit#amount}. |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#cluster_identifier RedshiftUsageLimit#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.featureType">featureType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#feature_type RedshiftUsageLimit#feature_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.limitType">limitType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#limit_type RedshiftUsageLimit#limit_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.breachAction">breachAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#breach_action RedshiftUsageLimit#breach_action}. |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#id RedshiftUsageLimit#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.period">period</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#period RedshiftUsageLimit#period}. |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#tags RedshiftUsageLimit#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#tags_all RedshiftUsageLimit#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.amount"></a>

```typescript
public readonly amount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#amount RedshiftUsageLimit#amount}.

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#cluster_identifier RedshiftUsageLimit#cluster_identifier}.

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.featureType"></a>

```typescript
public readonly featureType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#feature_type RedshiftUsageLimit#feature_type}.

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.limitType"></a>

```typescript
public readonly limitType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#limit_type RedshiftUsageLimit#limit_type}.

---

##### `breachAction`<sup>Optional</sup> <a name="breachAction" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.breachAction"></a>

```typescript
public readonly breachAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#breach_action RedshiftUsageLimit#breach_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#id RedshiftUsageLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#period RedshiftUsageLimit#period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#tags RedshiftUsageLimit#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.redshiftUsageLimit.RedshiftUsageLimitConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_usage_limit#tags_all RedshiftUsageLimit#tags_all}.

---



